"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Programming Languages": ["Java", "Python", "HTML", "CSS", "JavaScript"],
  "Databases": ["MySQL", "MongoDB"],
  "Frameworks and Libraries": ["Angular", "Spring Boot", "REST API", "Bootstrap", "Pandas", "NumPy", "Matplotlib"],
  "Tools and Platforms": ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Linux"],
  "Technical Concepts": ["Linux", "Object-Oriented Programming", "Data Structures and Algorithms"],
};


export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Expertise</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Skills</h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A look at the programming languages, tools, and technologies I work with.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skillsData).map(([category, skills]) => (
                <Card key={category} className="flex flex-col bg-background">
                  <CardHeader>
                      <CardTitle>{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                     </div>
                  </CardContent>
                </Card>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}