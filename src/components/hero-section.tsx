import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThreeScene from "@/components/three-scene";

import { ExternalLink } from "lucide-react"

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="#0077B5"
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="#FFA116"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const GeeksForGeeksIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#2F8D46"
    {...props}
  >
    <path d="M4 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" stroke="#2F8D46" strokeWidth="2" fill="none" strokeLinecap="round" />
  </svg>
);

const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="#1BA94C"
    {...props}
  >
    <path d="M0 0v24h24V0zm9.95 8.002h1.805c.061 0 .111.05.111.111v7.767c0 .061-.05.111-.11.111H9.95c-.061 0-.111-.05-.111-.11v-2.87H7.894v2.87c0 .06-.05.11-.11.11H5.976a.11.11 0 0 1-.11-.11V8.112c0-.06.05-.11.11-.11h1.806c.061 0 .11.05.11.11v2.869H9.84v-2.87c0-.06.05-.11.11-.11zm2.999 0h5.778c.061 0 .111.05.111.11v7.767a.11.11 0 0 1-.11.112h-5.78a.11.11 0 0 1-.11-.11v-7.77c0-.06.05-.11.11-.11z" />
  </svg>
);

/* ===== Hero Section ===== */

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
            Software Engineer & GenAI Enthusiast
          </span>
        </h1>

        <p className="max-w-[600px] text-base text-foreground/80 md:text-lg lg:text-xl leading-relaxed">
          I’m a Computer Science graduate passionate about building intelligent systems that blend creativity with technology. 
          With a strong coding foundation and curiosity for innovation, I love solving real-world problems through smart, efficient, 
          and forward-thinking solutions. My fascination with Generative AI drives me to explore how human imagination and machine intelligence 
          can create meaningful impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:justify-start">
          <Link href="https://www.linkedin.com/in/dheerajreddypullela/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center">
              <LinkedInIcon className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </Link>

          <Link href="https://github.com/dheerajreddy258" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </Link>

          <Link href="https://leetcode.com/u/dheeraj_reddy_pullela/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center">
              <LeetCodeIcon className="mr-2 h-5 w-5" /> LeetCode
            </Button>
          </Link>

          <Link href="https://www.geeksforgeeks.org/user/dheerajreddy2109/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="flex items-center gap-2">
  GeeksforGeeks
  <ExternalLink className="w-4 h-4" />
</Button>
          </Link>

          <Link href="https://www.hackerrank.com/profile/dheerajreddy258" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="flex items-center">
              <HackerRankIcon className="mr-2 h-5 w-5" /> HackerRank
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative flex justify-center md:justify-end">
        <div className="h-[320px] w-[320px] md:h-[480px] md:w-[480px]">
          <ThreeScene />
        </div>
      </div>
    </section>
  );
}
