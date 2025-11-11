import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const publications = [
  {
    name: 'Pedestrian Intention Detection for Autonomous Driving: A Novel Object Detection Approach',
    description:
      'Published the paper "Pedestrian Intention Detection for Autonomous Driving: A Novel Object Detection Approach" in the Proceedings of the 10th International Conference on Electrical and Energy Systems (ICEES-2024), now available on IEEE Xplore. This research explores innovative object detection methods for enhancing pedestrian safety in autonomous driving.',
    link: 'https://ieeexplore.ieee.org/document/10776856',
  },
  {
    name: 'An Exploration of Object Detection and Vehicular Communication for Autonomous Vehicles',
    description:
      'My research focuses on the integration of advanced computer vision techniques and vehicular communication to enable safe and efficient autonomous driving. I explore innovative solutions for object detection and vehicular communication, aiming to transform transportation systems. My work has the potential to impact not only autonomous vehicles but also ADAS-equipped vehicles, paving the way for a futuristic mobility landscape.',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-69982-5_33',
  },
];

export default function PublicationsSection() {
  return (
    <section id="publications" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              My Research
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Publications
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of my published research papers and articles.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          {publications.map((pub, index) => (
            <Card key={index} className="bg-card flex flex-col h-full">
              <CardHeader>
                <CardTitle>{pub.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">
                  {pub.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 mt-auto">
                <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Read Publication
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