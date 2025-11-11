import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Task Management System",
        description: [
            "Developed a Task Management System using Angular, Spring Boot, and MySQL to manage and track daily tasks efficiently.",
            "Implemented core features like user authentication, task CRUD operations, status tracking, and comments functionality."
        ],
        technologies: ["Angular", "Spring Boot", "MySQL"],
        githubUrl: "https://github.com/dheerajreddy258/TMS",
        liveUrl: null
    },
    {
        title: "Expense Tracker",
        description: [
            "Developed a React-based expense tracker application with budgeting features, allowing users to add, categorize, filter, and manage expenses."
        ],
        technologies: ["React", "HTML", "CSS"],
        githubUrl: "https://github.com/dheerajreddy258/expense-tracker.git",
        liveUrl: "https://expense-tracker-d.netlify.app/"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">My Work</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            A selection of projects that demonstrate my skills and passion for building.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-start gap-8 py-12 lg:grid-cols-2">
                    {projects.map((project) => {
                        return (
                        <Card key={project.title} className="w-full bg-card flex flex-col h-full overflow-hidden">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-6 flex-grow">
                                <div className="flex flex-col justify-center space-y-4">
                                    <ul className="list-disc space-y-2 pl-5 text-left text-sm text-foreground/80">
                                        {project.description.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 mt-auto">
                                {project.liveUrl && (
                                     <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <Button>
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Live Demo
                                        </Button>
                                    </Link>
                                )}
                                {project.githubUrl && (
                                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline">
                                        <Github className="mr-2 h-4 w-4" />
                                        View Code
                                    </Button>
                                </Link>
                                )}
                            </CardFooter>
                        </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}