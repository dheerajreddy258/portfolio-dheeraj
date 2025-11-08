import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThreeScene from "@/components/three-scene";

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M13.48 4.49l-2.1-1.2-5.43 9.42 2.1 1.2 5.43-9.42zm-6.24 10.83l-2.1-1.2-3.13 5.42 2.1 1.2 3.13-5.42zM21.7 9.8l-7.98-4.6-2.1 1.2 7.98 4.6 2.1-1.2zM24 12l-2.1-1.2-5.43 9.42 2.1 1.2L24 12z"></path>
    </svg>
  );
  
const GeeksForGeeksIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
>
    <path d="M12.63,2.19l-9.5,5.5v11l9.5,5.5l9.5-5.5v-11L12.63,2.19z M19.13,17.94l-6.5,3.75l-6.5-3.75V8.44l6.5-3.75l6.5,3.75V17.94z M8.13,13.19v2h3v-2H8.13z M12.13,11.19v2h3v-2H12.13z M16.13,9.19v2h3v-2H16.13z M10.63,14.19v2h3v-2H10.63z"></path>
</svg>
);
  
const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
>
    <path d="M9.99,19.82V13.6h4.01v6.22c0,2.17-1.42,3.18-3.32,3.18h-1.37V10.18h1.37c1.9,0,3.32,1.01,3.32,3.18v0.25H9.99V4.18C9.99,2.01,11.41,1,13.31,1h1.37v12.64H10.68V10.4c0-2.17,1.42-3.18,3.32-3.18h1.37v12.64c0,2.17-1.42,3.18-3.32,3.18h-1.37v-6.22H14v6.22c0,2.17-1.42,3.18-3.32,3.18H9.32c-1.9,0-3.32-1.01-3.32-3.18V4.18c0-2.17,1.42-3.18,3.32-3.18h1.37v6.22H6.68V4.18c0-2.17,1.42-3.18,3.32-3.18h1.37V0H9.32C5.31,0,3,2.01,3,6.18v11.64c0,4.17,2.31,6.18,6.32,6.18h1.37V19.82H9.99z"></path>
</svg>
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="container mx-auto grid min-h-[80vh] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32 md:px-12 lg:px-20"
    >
      {/* Left Content */}
      <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          <span className="block">Hi, I’m Dheeraj</span>
          <span className="block text-primary">
            Software Engineer and GenAI enthusisast
          </span>
        </h1>

        <p className="max-w-[600px] text-base text-foreground/80 md:text-lg lg:text-xl leading-relaxed">
          I’m a Computer Science graduate passionate about building intelligent
          systems that blend creativity with technology. With a strong coding
          foundation and a deep curiosity for innovation, I love solving
          real-world problems through smart, efficient, and forward-thinking
          solutions. My growing fascination with Generative AI drives me to
          explore how human imagination and machine intelligence can work
          together to create meaningful impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
                href="https://www.linkedin.com/in/dheerajreddypullela/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline" size="lg" aria-label="LinkedIn">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </Button>
            </Link>
            <Link
                href="https://github.com/dheerajreddy258"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline" size="lg" aria-label="GitHub">
                <Github className="mr-2 h-5 w-5" /> GitHub
                </Button>
            </Link>
            <Link
                href="https://leetcode.com/u/dheeraj_reddy_pullela/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline" size="lg" aria-label="LeetCode">
                <LeetCodeIcon className="mr-2 h-5 w-5" /> LeetCode
                </Button>
            </Link>
            <Link
                href="https://www.geeksforgeeks.org/user/dheerajreddy2109/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline" size="lg" aria-label="GeeksforGeeks">
                <GeeksForGeeksIcon className="mr-2 h-5 w-5" /> GeeksforGeeks
                </Button>
            </Link>
            <Link
                href="https://www.hackerrank.com/profile/dheerajreddy258"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline" size="lg" aria-label="Hackerrank">
                <HackerRankIcon className="mr-2 h-5 w-5" /> Hackerrank
                </Button>
            </Link>
        </div>
      </div>

      {/* Right Visual (3D Scene or Image) */}
      <div className="relative flex justify-center md:justify-end">
        <div className="h-[320px] w-[320px] md:h-[480px] md:w-[480px]">
          <ThreeScene />
        </div>
      </div>
    </section>
  );
}
