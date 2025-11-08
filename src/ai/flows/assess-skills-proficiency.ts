'use server';

/**
 * @fileOverview A skill proficiency assessment AI agent.
 *
 * - assessSkillsProficiency - A function that handles the skill proficiency assessment process.
 * - AssessSkillsProficiencyInput - The input type for the assessSkillsProficiency function.
 * - AssessSkillsProficiencyOutput - The return type for the assessSkillsProficiency function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessSkillsProficiencyInputSchema = z.object({
  resumeOrLinkedInProfile: z
    .string()
    .describe("A resume or LinkedIn profile, as a text string."),
});
export type AssessSkillsProficiencyInput = z.infer<typeof AssessSkillsProficiencyInputSchema>;

const AssessSkillsProficiencyOutputSchema = z.object({
  skillAssessments: z.array(
    z.object({
      skillName: z.string().describe('The name of the skill.'),
      proficiencyLevel: z.string().describe('The proficiency level in the skill (e.g., Beginner, Intermediate, Advanced).'),
      explanation: z.string().describe('An explanation of the proficiency level.'),
    })
  ).describe('A list of skill assessments.'),
});
export type AssessSkillsProficiencyOutput = z.infer<typeof AssessSkillsProficiencyOutputSchema>;

export async function assessSkillsProficiency(input: AssessSkillsProficiencyInput): Promise<AssessSkillsProficiencyOutput> {
  return assessSkillsProficiencyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessSkillsProficiencyPrompt',
  input: {schema: AssessSkillsProficiencyInputSchema},
  output: {schema: AssessSkillsProficiencyOutputSchema},
  prompt: `You are an expert career coach specializing in assessing skill proficiency based on resumes and LinkedIn profiles.

You will analyze the provided resume or LinkedIn profile and rate the user's proficiency level in various skills.
For each skill, you will provide a proficiency level (Beginner, Intermediate, Advanced) and an explanation of why you assigned that level.

Resume/LinkedIn Profile: {{{resumeOrLinkedInProfile}}}

Please provide the skill assessments in the following JSON format:
\`\`\`json
{
  "skillAssessments": [
    {
      "skillName": "Skill Name",
      "proficiencyLevel": "Proficiency Level",
      "explanation": "Explanation of Proficiency Level"
    }
  ]
}
\`\`\`
`,
});

const assessSkillsProficiencyFlow = ai.defineFlow(
  {
    name: 'assessSkillsProficiencyFlow',
    inputSchema: AssessSkillsProficiencyInputSchema,
    outputSchema: AssessSkillsProficiencyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
