import { MessageSquare, HelpCircle, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Firstly?",
      answer: "Firstly is a peer-to-peer mentoring community for high school students looking for real, relatable support to navigate academics, extracurriculars, and personal growth.",
      icon: <Info className="w-5 h-5" />
    },
    {
      question: "How does it work?",
      answer: "Sign up, get matched with a peer mentor who has shared interests or experiences, and start engaging with weekly discussion prompts. You can also explore mentors from other schools nationwide.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      question: "Who can join Firstly?",
      answer: "Any high school student (ages 14–18). Parents can also help sign up their teens to ensure they're getting reliable, peer-based guidance.",
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      question: "Is Firstly free to use?",
      answer: "Yes! We're here to help high school students find supportive connections at no cost.",
      icon: <Info className="w-5 h-5" />
    },
    {
      question: "How are mentors and mentees matched?",
      answer: "We use a matching system based on interests, goals, grade level, and school involvement to help create the best possible peer connections.",
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-white border-b-4 border-accent" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Everything you need to know about Firstly
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-secondary rounded-lg border-4 border-accent px-4 shadow-[8px_8px_0px_0px_#221F26] data-[state=open]:shadow-none transition-all duration-200"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border-2 border-accent">
                    {faq.icon}
                  </div>
                  <span className="text-xl font-bold">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg pb-6 pl-[52px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center glass-card p-8 rounded-lg section-fade">
          <p className="text-lg mb-4">
            Still have questions? Reach out to us at{" "}
            <a href="mailto:kevin@joinfirstly.com" className="text-primary hover:underline">
              kevin@joinfirstly.com
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/company/firstlypro" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com/firstly.pro" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};