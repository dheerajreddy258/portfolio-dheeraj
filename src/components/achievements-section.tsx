import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const achievements = [
  {
    name: 'TNSCST Project Grant',
    issuer: 'TNSCST (TamilNadu State Council for Science and Technology)',
    date: 'Oct 2024',
    description:
      "Received the TNSCST Project Grant for the project on 'An Exploration of Object Detection and Vehicular Communication for Autonomous Vehicles'. This grant award is a testament to the innovative potential of my research, and I am grateful to Amrita Vishwa Vidyapeetham, Chennai & the Tamil Nadu State Council of Science and Technology for their support.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7259520100364390400/',
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Milestones
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Achievements
            </h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Key achievements and recognitions throughout my career.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card flex flex-col h-full">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
                  <CardTitle>{achievement.name}</CardTitle>
                  <p className="text-sm text-muted-foreground shrink-0 text-left sm:text-right">{achievement.issuer} &middot; {achievement.date}</p>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">
                  {achievement.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 mt-auto">
                <Link href={achievement.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on LinkedIn
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}