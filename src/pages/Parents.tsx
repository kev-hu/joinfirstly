import { ParentsHero } from "@/components/parents/ParentsHero";
import { ParentsReassurance } from "@/components/parents/ParentsReassurance";
import { ParentsHowItWorks } from "@/components/parents/ParentsHowItWorks";
import { ParentsBenefits } from "@/components/parents/ParentsBenefits";
import { ParentsTestimonials } from "@/components/parents/ParentsTestimonials";
import { ParentsPricing } from "@/components/parents/ParentsPricing";
import { ParentsFAQ } from "@/components/parents/ParentsFAQ";
import { Footer } from "@/components/landing/Footer";

const Parents = () => {
  return (
    <main className="min-h-screen">
      <ParentsHero />
      <ParentsReassurance />
      <ParentsHowItWorks />
      <ParentsBenefits />
      <ParentsTestimonials />
      <ParentsPricing />
      <ParentsFAQ />
      <Footer />
    </main>
  );
};

export default Parents;