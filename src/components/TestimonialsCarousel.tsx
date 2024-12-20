import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Alex Chen",
    major: "Computer Science",
    quote: "Finding a mentor who understood my challenges made all the difference.",
    university: "Stanford University"
  },
  {
    name: "Sarah Johnson",
    major: "Psychology",
    quote: "The weekly prompts helped me discover new perspectives I hadn't considered.",
    university: "NYU"
  },
  {
    name: "Marcus Williams",
    major: "Business Administration",
    quote: "Connecting with peers nationwide opened up so many opportunities.",
    university: "University of Michigan"
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

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden h-48">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-full flex-shrink-0 mx-2">
            <CardContent className="p-6">
              <p className="text-lg italic mb-4">{testimonial.quote}</p>
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.major} • {testimonial.university}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};