import * as z from "zod";
import { formSchema } from "@/lib/schema";
import React from "react";

type Inputs = z.infer<typeof formSchema>;

const ContactFormEmail: React.FC<Readonly<Inputs>> = ({ email, message }) => (
  <div>
    <h1> Contact form submission</h1>
    <p> from {email}</p>
    <h2>Message</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
