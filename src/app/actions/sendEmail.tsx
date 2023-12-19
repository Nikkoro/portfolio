"use server";
import { formSchema } from "@/lib/schema";
import { Resend } from "resend";
import * as z from "zod";
import ContactFormEmail from "@/components/emails/contact-form";

type Inputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: Inputs) => {
  const result = formSchema.safeParse(data);

  if (result.success) {
    const { email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "nikodem@domaracki.tech",
        to: ["nikodemdomaracki@gmail.com"],
        subject: "Contact form submission",
        text: `Email: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ email, message }),
      });

      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
