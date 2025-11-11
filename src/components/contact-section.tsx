import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Get in Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Me</h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm always open to connecting with new people.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-6 pt-12 text-center">
          <div className="flex flex-col gap-4">
            <Link href="https://www.linkedin.com/in/dheerajreddypullela/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-2 text-foreground/80">
              <Mail className="h-5 w-5" />
              <span>dheerajreddy2109@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
