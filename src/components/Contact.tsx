"use client";
import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema } from "@/lib/schema";
import { sendEmail } from "@/app/actions/sendEmail";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

type Inputs = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      const result = await sendEmail(data);

      if (result?.success) {
        toast({
          description: "Message sent successfully",
        });
      } else {
        toast({
          description: "Message failed to send",
        });
        // console.log(result?.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mb-20 w-full  py-8 md:py-12" id="contact">
      <div className="container grid items-center justify-center gap-4 px-0 text-center  lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact me
          </h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processForm)}>
            <Card>
              <CardHeader>
                <CardDescription>
                  Please contact me at{" "}
                  <a
                    className="text-foreground"
                    href="mailto:nikodemdomaracki@gmail.com"
                  >
                    nikodemdomaracki@gmail.com
                  </a>{" "}
                  or fill out the form below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage className="text-secondary-foreground" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[100px]"
                          id="message"
                          placeholder="Enter your message here"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-secondary-foreground" />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit" disabled={isLoading}>
                  Submit
                </Button>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </section>
  );
}
