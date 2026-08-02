import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  salutation: z.string().optional(),
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  city: z.string().min(1),
  state: z.string().min(1),
  country: z.string().min(1),
  challenge: z.string().min(10),
  preferredContact: z.enum(["email", "phone"]),
});

export async function POST(request: Request) {
  const erpUrl = process.env.ERPNEXT_URL;
  const webForm = process.env.ERPNEXT_WEB_FORM ?? "order-consultation";

  if (!erpUrl) {
    console.error("ERPNEXT_URL is not configured");
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 500 }
    );
  }

  const parsed = contactSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid form submission." },
      { status: 400 }
    );
  }

  const { salutation, name, company, email, phone, city, state, country, challenge, preferredContact } =
    parsed.data;
  const [firstName, ...rest] = name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  const leadPayload = {
    salutation: salutation || "",
    first_name: firstName,
    last_name: lastName,
    email_id: email,
    mobile_no: phone,
    company_name: company,
    city,
    state,
    country,
    custom_preferred_contact_method: preferredContact === "phone" ? "Mobile" : "Email",
    custom_business_challenges: challenge,
    doctype: "Lead",
    web_form_name: webForm,
  };

  const body = new URLSearchParams({
    data: JSON.stringify(leadPayload),
    web_form: webForm,
    for_payment: "false",
    cmd: "frappe.website.doctype.web_form.web_form.accept",
  });

  try {
    const erpResponse = await fetch(erpUrl.replace(/\/$/, "") + "/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: body.toString(),
    });

    if (erpResponse.ok) {
      return NextResponse.json({ ok: true });
    }

    const errorPayload = await erpResponse.json().catch(() => null);

    // A visitor re-submitting with the same email is not a real failure.
    if (errorPayload?.exc_type === "DuplicateEntryError") {
      return NextResponse.json({ ok: true });
    }

    console.error("ERPNext lead submission failed:", errorPayload ?? erpResponse.statusText);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your message. Please try again." },
      { status: 502 }
    );
  } catch (err) {
    console.error("ERPNext lead submission error:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your message. Please try again." },
      { status: 502 }
    );
  }
}
