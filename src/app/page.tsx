import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import PublicationsSection from '@/components/publications-section';
import AchievementsSection from '@/components/achievements-section';
import CertificationsSection from '@/components/certifications-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <PublicationsSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}
