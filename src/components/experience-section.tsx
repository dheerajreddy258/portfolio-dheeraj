export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Career Journey</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Professional Experience</h2>
            <p className="max-w-[900px] text-secondary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional history and key roles I've undertaken.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 text-center">
            <p className="text-secondary-foreground/80">Experience details coming soon...</p>
        </div>
      </div>
    </section>
  );
}
