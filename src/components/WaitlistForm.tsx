import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast.error("Please set up your Zapier webhook URL first");
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name,
          email,
          college,
          gradYear,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success("Thanks for joining our waitlist!");
      setName("");
      setEmail("");
      setCollege("");
      setGradYear("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="url"
        placeholder="Paste your Zapier Webhook URL here"
        value={webhookUrl}
        onChange={(e) => setWebhookUrl(e.target.value)}
        className="h-12 text-lg px-6 rounded-xl border-4 border-accent bg-white placeholder:text-gray-500"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
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
          placeholder="Your College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
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
          className="w-full h-12 text-lg font-bold bg-primary text-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Join Waitlist"}
        </Button>
      </form>
    </div>
  );
};