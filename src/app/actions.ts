'use server';

import { z } from 'zod';
import { assessSkillsProficiency, AssessSkillsProficiencyOutput } from '@/ai/flows/assess-skills-proficiency';

const schema = z.object({
  resumeOrLinkedInProfile: z.string().min(100, { message: 'Profile text must be at least 100 characters.' }),
});

type State = {
  message?: string | null;
  assessment?: AssessSkillsProficiencyOutput | null;
}

export async function handleAssessSkills(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    resumeOrLinkedInProfile: formData.get('resumeOrLinkedInProfile'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.resumeOrLinkedInProfile?.[0] || 'Invalid input.',
      assessment: null,
    };
  }

  try {
    const result = await assessSkillsProficiency({ resumeOrLinkedInProfile: validatedFields.data.resumeOrLinkedInProfile });
    if (result && result.skillAssessments.length > 0) {
      return { message: 'Assessment successful!', assessment: result };
    } else {
      return { message: 'Could not assess skills from the provided text. Please try with a more detailed profile.', assessment: null };
    }
  } catch (error) {
    console.error('AI assessment failed:', error);
    return { message: 'An error occurred during assessment. Please try again later.', assessment: null };
  }
}
