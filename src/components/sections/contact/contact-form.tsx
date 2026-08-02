"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { countries, salutations } from "@/lib/constants/countries";

const contactSchema = z.object({
  salutation: z.string().optional(),
  name: z.string().min(2, "Please enter your full name."),
  company: z.string().min(2, "Please enter your company name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  city: z.string().min(1, "Please enter your city."),
  state: z.string().min(1, "Please enter your state/province."),
  country: z.string().min(1, "Please select your country."),
  challenge: z.string().min(10, "Please tell us a bit more about your challenge."),
  preferredContact: z.enum(["email", "phone"]),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const selectClassName =
  "h-9 w-full rounded-xl border border-input bg-transparent px-3 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { preferredContact: "email", salutation: "", country: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-10 text-center">
        <CheckCircle2 className="size-10 text-success" />
        <h3 className="text-lg font-semibold text-navy">Thank you!</h3>
        <p className="text-sm text-slate-muted">
          We&apos;ve received your message and will get back to you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-2 rounded-xl"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="salutation">Salutation (optional)</Label>
          <select id="salutation" className={selectClassName} {...register("salutation")}>
            <option value="">Select...</option>
            {salutations.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" className="rounded-xl" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-error">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">Company</Label>
          <Input id="company" className="rounded-xl" {...register("company")} />
          {errors.company && (
            <p className="text-xs text-error">{errors.company.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" className="rounded-xl" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-error">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" className="rounded-xl" {...register("phone")} />
          {errors.phone && (
            <p className="text-xs text-error">{errors.phone.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" className="rounded-xl" {...register("city")} />
          {errors.city && (
            <p className="text-xs text-error">{errors.city.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="state">State/Province</Label>
          <Input id="state" className="rounded-xl" {...register("state")} />
          {errors.state && (
            <p className="text-xs text-error">{errors.state.message}</p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="country">Country</Label>
          <select id="country" className={selectClassName} {...register("country")}>
            <option value="">Select...</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-xs text-error">{errors.country.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="challenge">Business Challenge</Label>
        <Textarea
          id="challenge"
          rows={5}
          className="rounded-xl"
          placeholder="Tell us what you're looking to solve..."
          {...register("challenge")}
        />
        {errors.challenge && (
          <p className="text-xs text-error">{errors.challenge.message}</p>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-sm font-medium text-navy">
          Preferred Contact Method
        </legend>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm text-slate">
            <input type="radio" value="email" {...register("preferredContact")} />
            Email
          </label>
          <label className="flex items-center gap-2 text-sm text-slate">
            <input type="radio" value="phone" {...register("preferredContact")} />
            Phone
          </label>
        </div>
      </fieldset>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl bg-error/10 p-3 text-sm text-error">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        className="h-12 w-full rounded-xl text-base"
        disabled={status === "submitting"}
      >
        {status === "submitting" && (
          <Loader2 className="size-4 animate-spin" />
        )}
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
