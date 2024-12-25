import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

export const SocialProof = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`${isMobile ? 'py-12' : 'py-20'} px-4 bg-[#E0F2FE] border-b-4 border-black overflow-visible`}>
      <div className="container max-w-6xl overflow-visible">
        <div className="text-center section-fade overflow-visible">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-black mb-4`}>
            What Students Are Saying
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-muted-foreground mb-12 max-w-2xl mx-auto`}>
            Join thousands of students who have found guidance and support through our peer mentorship program
          </p>
          
          <div className="mb-16 overflow-visible">
            <TestimonialsCarousel />
          </div>
          
          <div className={`
            max-w-xl mx-auto bg-white 
            ${isMobile ? 'p-6' : 'p-8'} 
            rounded-lg glass-card
          `}>
            <p className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-4`}>
              92% of users felt more confident after their first session
            </p>
            <p className="text-muted-foreground">
              Join thousands of students already benefiting from peer mentorship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};