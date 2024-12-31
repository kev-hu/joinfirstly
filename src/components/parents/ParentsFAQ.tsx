import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ParentsFAQ = () => {
  const faqs = [
    {
      question: "Is this safe?",
      answer: "We perform background checks on facilitators, enforce privacy protocols, and moderate sessions. Summaries are shared with parents for added transparency.",
    },
    {
      question: "How long are the sessions?",
      answer: "Each session runs 30–45 minutes, with flexibility to accommodate busy student schedules.",
    },
    {
      question: "What if the match isn't a good fit?",
      answer: "We'll work with you to rematch the student at any time, no extra cost.",
    },
    {
      question: "Is it like tutoring or therapy?",
      answer: "It's peer-to-peer mentoring focused on holistic skills (academic, social, emotional). For academic tutoring or therapy needs, we can recommend additional resources.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our program
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};