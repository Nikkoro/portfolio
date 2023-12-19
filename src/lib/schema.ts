import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long" }),
});
