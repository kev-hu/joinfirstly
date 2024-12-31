import { ProgramHero } from "@/components/program/ProgramHero";
import { ProgramBenefits } from "@/components/program/ProgramBenefits";
import { ProgramHowItWorks } from "@/components/program/ProgramHowItWorks";
import { ProgramHighlights } from "@/components/program/ProgramHighlights";
import { ProgramTestimonials } from "@/components/program/ProgramTestimonials";
import { Footer } from "@/components/landing/Footer";

const Program = () => {
  return (
    <main className="min-h-screen">
      <ProgramHero />
      <ProgramBenefits />
      <ProgramHowItWorks />
      <ProgramHighlights />
      <ProgramTestimonials />
      <Footer />
    </main>
  );
};

export default Program;