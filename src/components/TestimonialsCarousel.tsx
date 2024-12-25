import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Elizabeth G.",
    university: "CSU East Bay",
    quote: "I felt so stuck after deciding to switch away from Psychology. I stuck with Firstly because I got to meet mentors who understand my challenges. It's truly a safe space for first-generation students like me.",
    emoji: "🌱",
    bgColor: "bg-[#D6BCFA]"
  },
  {
    name: "David C.",
    university: "CSU East Bay",
    quote: "I feel so lucky that CSU East Bay had Firstly. The program helped me find a group of peers that I can talk to about my career and future.",
    emoji: "🤝",
    bgColor: "bg-[#0EA5E9]"
  },
  {
    name: "Brittney S.",
    university: "UC Irvine",
    quote: "I couldn't find a career that I was interested in at first. But through Firstly's peer mentorship program, I met a mentor who referred me and helped me get my dream job in Tech!",
    emoji: "💫",
    bgColor: "bg-[#9b87f5]"
  },
  {
    name: "Francine T.",
    university: "CSU Long Beach",
    quote: "As a freshman, I was so lost and confused about what to do with my career. I met a peer mentor who helped me reevaluate what I wanted out of myself and my career. The Firstly program gave me a support network that I can depend on for more than just career stuff.",
    emoji: "🌟",
    bgColor: "bg-[#F2FCE2]"
  },
  {
    name: "Anonymous Zottie",
    university: "UC Irvine",
    quote: "My mental health was among its lowest during this quarter. The new perspective that my mentor helped me build has really changed the way I go about my day and my college experience. Without it, I would not have made progress on the challenges that I was facing.",
    emoji: "🫂",
    bgColor: "bg-[#1EAEDB]"
  },
  {
    name: "Melissa N.",
    university: "UC Irvine",
    quote: "I felt overwhelmed at the beginning of the year, but the program gave me reassurance. Now, I feel like I can approach any class with a positive outlook and without giving up.",
    emoji: "✨",
    bgColor: "bg-[#7E69AB]"
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Navigation dots */}
      <div className={`
        flex justify-center mb-6
        ${isMobile ? 'gap-2' : 'gap-3'}
      `}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`
              ${isMobile ? 'w-4 h-4' : 'w-6 h-6'}
              border-2 border-black 
              transition-all duration-200
              ${currentIndex === index 
                ? `bg-primary translate-y-0 ${isMobile ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}` 
                : `bg-white hover:-translate-y-1 ${isMobile ? 'hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`
              }
            `}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel container with dynamic height */}
      <div className="relative w-full overflow-hidden mb-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card 
                className={`
                  glass-card bg-white hover:-translate-y-2 transition-transform duration-300 
                  ${isMobile ? 'mx-2 max-w-[90%] min-h-[300px]' : 'mx-4'}
                `}
              >
                <CardContent className={`${isMobile ? 'p-6' : 'p-8'}`}>
                  <div className="flex flex-col items-center mb-4">
                    <div 
                      className={`
                        ${testimonial.bgColor} rounded-lg border-4 border-black 
                        ${isMobile ? 'p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
                      `}
                    >
                      <span className={`${isMobile ? 'text-3xl' : 'text-4xl'}`}>
                        {testimonial.emoji}
                      </span>
                    </div>
                  </div>
                  <p className={`
                    ${isMobile ? 'text-base' : 'text-lg'} 
                    mb-4 text-accent font-medium leading-relaxed
                  `}>
                    {testimonial.quote}
                  </p>
                  <div className="text-sm space-y-0.5">
                    <p className="font-bold text-accent">{testimonial.name}</p>
                    <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted`}>
                      {testimonial.university}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};