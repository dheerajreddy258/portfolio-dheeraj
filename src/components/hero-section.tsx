import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ThreeScene from '@/components/three-scene';

export default function HeroSection() {
  return (
    <section id="home" className="container grid grid-cols-1 items-center gap-8 py-20 md:grid-cols-2 md:py-32">
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          <span className="block">Hi, I'm Dheeraj</span>
          <span className="block text-primary">Software Engineer and GenAI enthusisast</span>
        </h1>
        <p className="max-w-[600px] text-foreground/80 md:text-xl">
          I'm passionate about building intelligent systems that solve real-world problems. My journey in tech is driven by a curiosity for how we can leverage machine learning to create smarter, more efficient, and intuitive products. From developing predictive models to exploring the frontiers of generative AI, I'm always eager to learn and build.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Link href="#contact">
            <Button size="lg">Contact Me</Button>
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" aria-label="GitHub">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
             <Button variant="outline" size="lg" aria-label="LinkedIn">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative h-[300px] w-full md:h-[500px]">
        <ThreeScene />
      </div>
    </section>
  );
}
