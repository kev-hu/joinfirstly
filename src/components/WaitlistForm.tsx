import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hooks.zapier.com/hooks/catch/13650783/28rxnc0/", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          school,
          gradYear,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success("Thanks for joining our waitlist! We'll be in touch soon.");
      setName("");
      setEmail("");
      setSchool("");
      setGradYear("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="h-12 text-lg px-6 rounded-xl border-4 border-accent bg-white placeholder:text-gray-500"
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-12 text-lg px-6 rounded-xl border-4 border-accent bg-white placeholder:text-gray-500"
      />
      <Input
        type="text"
        placeholder="Your High School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        required
        className="h-12 text-lg px-6 rounded-xl border-4 border-accent bg-white placeholder:text-gray-500"
      />
      <Input
        type="text"
        placeholder="Expected Graduation Year"
        value={gradYear}
        onChange={(e) => setGradYear(e.target.value)}
        required
        className="h-12 text-lg px-6 rounded-xl border-4 border-accent bg-white placeholder:text-gray-500"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full h-12 text-lg font-bold bg-primary text-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26] disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};