"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleAssessSkills } from "@/app/actions";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Bot, Loader2, Sparkles } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Assessing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Assess My Skills
        </>
      )}
    </Button>
  );
}

export default function SkillsSection() {
  const initialState = { message: null, assessment: null };
  const [state, formAction] = useFormState(handleAssessSkills, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message && state.message !== 'Assessment successful!') {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">AI-Powered Skill Assessment</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Your Proficiency</h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Paste your resume or LinkedIn profile below. Our AI will analyze it and provide an assessment of your skills, highlighting your strengths and areas for growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          <form action={formAction} className="grid gap-4">
            <Textarea
              name="resumeOrLinkedInProfile"
              placeholder="Paste your resume or LinkedIn profile content here..."
              className="min-h-[200px] bg-background text-sm"
              required
            />
            <SubmitButton />
          </form>

          {state?.assessment ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {state.assessment.skillAssessments.map((skill) => (
                <Card key={skill.skillName} className="flex flex-col bg-background">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{skill.skillName}</CardTitle>
                      <Badge variant={
                        skill.proficiencyLevel.toLowerCase() === 'advanced' ? 'default' : 
                        skill.proficiencyLevel.toLowerCase() === 'intermediate' ? 'secondary' : 'outline'
                      }>
                        {skill.proficiencyLevel}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <CardDescription>{skill.explanation}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border/60 p-8 text-center">
                <Bot className="h-16 w-16 text-secondary-foreground/60" />
                <h3 className="text-xl font-semibold">Waiting for your profile</h3>
                <p className="text-secondary-foreground/80">Your skill assessment will appear here.</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
