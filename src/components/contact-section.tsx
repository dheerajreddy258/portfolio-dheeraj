import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Fill out the form below.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-4 pt-12">
            <form className="grid gap-4">
                <Input type="text" placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Textarea placeholder="Your message" required className="min-h-[120px]"/>
                <Button type="submit">Send Message</Button>
            </form>
        </div>
      </div>
    </section>
  );
}
