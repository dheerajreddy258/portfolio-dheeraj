import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const experiences = [
  {
    role: 'AI Engineer Trainee',
    company: 'mthree',
    duration: 'July 2025 – August 2025',
    description: [
      'Completed training in AI/ML landscape, deep learning, data lifecycles, and model building & evaluation.',
      'Gained hands-on experience in data engineering foundations, advanced pipelines, and MLOps fundamentals.',
      'Applied NLP techniques including transformers, embeddings, and sentiment analysis.',
      'Developed skills in prompt engineering, AI ethics, and practical AI/ML use cases.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'mthree',
    duration: 'February 2025 – April 2025',
    description: [
      'Completed a software development internship focused on building web applications using Java and frameworks.',
      'Gained hands-on experience with Core Java, Spring, Spring Boot, MySQL, and Angular.',
      'Developed and maintained application features, following best coding practices.',
      'Participated in code reviews to ensure code quality and enhance understanding of industry standards.',
    ],
  },
  {
    role: 'BootCamp participant-Boot41',
    company: 'Think41',
    duration: 'October 2024',
    description: [
      'Participated in an intensive hands-on bootcamp designed to develop advanced skills in AI and technology.',
      'Tackled real-world concepts and projects, gaining practical experience in problem-solving and technical development.',
      'Fostered a mindset of continuous learning and professional growth through immersive training sessions.',
      'Collaborated with peers and mentors, enhancing teamwork and communication skills.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Career Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Professional Experience
            </h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional history and key roles I've undertaken.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{exp.role}</CardTitle>
                  <span className="text-sm text-foreground/60">{exp.duration}</span>
                </div>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-left text-sm text-foreground/80">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}