"use server";
import { formSchema } from "@/lib/schema";
import { Resend } from "resend";
import * as z from "zod";
import ContactFormEmail from "@/components/emails/contact-form";
import Confirmation from "@/components/emails/confirmation";
import { render } from "jsx-email";

type Inputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: Inputs) => {
  const result = formSchema.safeParse(data);

  if (result.success) {
    const { email, message } = result.data;
    const template = <Confirmation email={email} message={message} />;
    const html = await render(template);
    try {
      const ownerEmail = await resend.emails.send({
        from: "Nikodem <nikodem@domaracki.tech>",
        to: ["nikodemdomaracki@gmail.com"],
        subject: "Contact form submission",
        text: `from ${email} \n\n ${message}`,
        react: ContactFormEmail({ email, message }),
      });

      const confirmationEmail = await resend.emails.send({
        from: "Nikodem <nikodem@domaracki.tech>",
        to: [email],
        subject: "Contact form confirmation",
        html,
      });

      return { success: true, ownerEmail, confirmationEmail };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
