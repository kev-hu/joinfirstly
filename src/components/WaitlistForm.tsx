import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [gradYear, setGradYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for joining our waitlist!");
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
      >
        Join Waitlist
      </Button>
    </form>
  );
};