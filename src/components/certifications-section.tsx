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
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    name: 'AI Engineering',
    issuer: 'mthree',
    date: 'Aug 2025',
    link: 'https://www.credly.com/badges/9bea3964-1e83-429c-ae3a-06404855d04c/public_url',
  },
  {
    name: 'Software Developer - Java',
    issuer: 'mthree',
    date: 'Apr 2025',
    link: 'https://www.credly.com/badges/7dc86263-4390-4f75-b281-cbf1b6819b2c',
  },
  {
    name: 'Python (Basic) Certificate',
    issuer: 'Hackerrank',
    date: 'June 2023',
    link: 'https://www.hackerrank.com/certificates/cbfa37c9c4c5',
  },
  {
    name: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    date: 'June 2023',
    link: 'https://www.coursera.org/account/accomplishments/certificate/XLG3CPQMU8V6',
  },
  {
    name: 'Problem Solving (Basic) Certificate',
    issuer: 'Hackerrank',
    date: 'May 2023',
    link: 'https://www.hackerrank.com/certificates/3af82acb1e6d',
  },
  {
    name: 'Google Cloud Skill Badges',
    issuer: 'Google Cloud Skills Boost',
    date: 'Apr 2023',
    link: 'https://www.skills.google/public_profiles/4ea9082a-6b72-428d-819a-5c19e0e078b5',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Credentials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Certifications</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional certifications and qualifications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card flex flex-col h-full">
              <CardHeader>
                <CardTitle>{cert.name}</CardTitle>
                <CardDescription>{cert.issuer} &middot; {cert.date}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-start mt-auto">
                <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Credential
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
