import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Elizabeth G.",
    university: "CSU East Bay",
    quote: "I felt so stuck after deciding to switch away from Psychology. I stuck with Firstly because I got to meet mentors who understand my challenges. It's truly a safe space for first-generation students like me."
  },
  {
    name: "David C.",
    university: "CSU East Bay",
    quote: "I feel so lucky that CSU East Bay had Firstly. The program helped me find a group of peers that I can talk to about my career and future."
  },
  {
    name: "Brittney S.",
    university: "UC Irvine",
    quote: "I couldn't find a career that I was interested in at first. But through Firstly's peer mentorship program, I met a mentor who referred me and helped me get my dream job in Tech!"
  },
  {
    name: "Francine T.",
    university: "CSU Long Beach",
    quote: "As a freshman, I was so lost and confused about what to do with my career. I met a peer mentor who helped me reevaluate what I wanted out of myself and my career. The Firstly program gave me a support network that I can depend on for more than just career stuff."
  },
  {
    name: "Anonymous Zottie",
    university: "UC Irvine",
    quote: "My mental health was among its lowest during this quarter. The new perspective that my mentor helped me build has really changed the way I go about my day and my college experience. Without it, I would not have made progress on the challenges that I was facing."
  },
  {
    name: "Melissa N.",
    university: "UC Irvine",
    quote: "I felt overwhelmed at the beginning of the year, but the program gave me reassurance. Now, I feel like I can approach any class with a positive outlook and without giving up."
  }
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="relative overflow-hidden min-h-[300px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="w-full flex-shrink-0 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center mb-4 border-2 border-black">
                    <UserRound className="text-black" size={32} />
                  </div>
                </div>
                <p className="text-lg mb-6 text-accent">{testimonial.quote}</p>
                <div className="text-sm">
                  <p className="font-bold text-accent">{testimonial.name}</p>
                  <p className="text-muted">{testimonial.university}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 border-2 border-black transition-colors ${
              currentIndex === index ? 'bg-primary' : 'bg-white'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};