import {
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="w-full py-8  md:py-12" id="contact">
      <div className="container grid items-center justify-center gap-4 px-0 text-center  lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact me
          </h2>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-muted-foreground">
              Form is not working yet
            </CardTitle>
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
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Enter your message here"
                  required
                />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
