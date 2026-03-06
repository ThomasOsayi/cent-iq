import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import DashboardPreview from "@/components/DashboardPreview";
import EverythingYouNeed from "@/components/EverythingYouNeed";
import AllClasses from "@/components/AllClasses";
import LessonLibrary from "@/components/LessonLibrary";
import StudentAnalytics from "@/components/StudentAnalytics";
import ReportsSection from "@/components/ReportsSection";
import CurriculumGoals from "@/components/CurriculumGoals";
import MultiDevice from "@/components/MultiDevice";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import PilotResults from "@/components/PilotResults";
import DemoForm from "@/components/DemoForm";
import { FAQ } from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const faqs = [
  { q: "What grade levels does CentIQ support?", a: "CentIQ supports students from grades 6-12 with age-appropriate, standards-aligned financial literacy content. Our curriculum covers everything from basic budgeting fundamentals to more advanced topics like investing and compound growth." },
  { q: "How does CentIQ align with state financial literacy requirements?", a: "Our 400+ lessons are mapped to state and national standards, including JumpStart financial literacy requirements. We regularly update our content to stay aligned with evolving state mandates." },
  { q: "Is CentIQ free for underserved communities?", a: "Yes! Through the CentIQ Foundation, we provide full platform access at no cost to Title I schools, after-school programs serving low-income students, and community organizations in underserved areas." },
  { q: "How quickly can we get started with CentIQ?", a: "Most schools are fully onboarded within 1-2 weeks. Week 1 covers teacher onboarding and account setup, Week 2 handles student registration, and by Week 3 you'll have regular lessons integrated into your curriculum." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <DashboardPreview />
      <EverythingYouNeed />
      <AllClasses />
      <LessonLibrary />
      <StudentAnalytics />
      <ReportsSection />
      <CurriculumGoals />
      <MultiDevice />
      <Integrations />
      <Testimonials />
      <Resources />
      <PilotResults />
      <DemoForm />
      <FAQ items={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
      <BottomCTA />
      <Footer />
    </>
  );
}
