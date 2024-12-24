import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [gradYear, setGradYear] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    toast.success("Thanks for joining our waitlist!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        type="email"
        placeholder="Your school email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="glass-card"
      />
      <Input
        type="text"
        placeholder="Your university (e.g., UC Irvine)"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        required
        className="glass-card"
      />
      <Input
        type="text"
        placeholder="Expected graduation year (e.g., 2025)"
        value={gradYear}
        onChange={(e) => setGradYear(e.target.value)}
        required
        className="glass-card"
      />
      <Button type="submit" className="w-full glass-card bg-primary text-white hover:bg-primary/90">
        Join Waitlist
      </Button>
    </form>
  );
};
