import { MessageSquare, HelpCircle, Info, Clock, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Is this safe?",
      answer: "We perform background checks on facilitators, enforce privacy protocols, and moderate sessions. Summaries are shared with parents for added transparency.",
      icon: <Info className="w-5 h-5" />
    },
    {
      question: "How long are the sessions?",
      answer: "Each session runs 30–45 minutes, with flexibility to accommodate busy student schedules.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "What if the match isn't a good fit?",
      answer: "We'll work with you to rematch the student at any time, no extra cost.",
      icon: <Users className="w-5 h-5" />
    },
    {
      question: "Is it like tutoring or therapy?",
      answer: "It's peer-to-peer mentoring focused on holistic skills (academic, social, emotional). For academic tutoring or therapy needs, we can recommend additional resources.",
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      question: "How do you match mentors and mentees?",
      answer: "We use a comprehensive matching system based on interests, goals, grade level, and personality traits to create the most beneficial peer connections.",
      icon: <HelpCircle className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-4 bg-white border-b-4 border-accent" id="faq">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl font-black mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Everything you need to know about our peer mentoring program
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