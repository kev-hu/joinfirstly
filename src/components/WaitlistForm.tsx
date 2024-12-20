import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: ""
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Firstly!",
      description: "You've been added to our waitlist. We'll be in touch soon!",
    });
    
    setFormData({ name: "", email: "", major: "" });
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-3">
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="bg-white/90"
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="bg-white/90"
      />
      <Input
        type="text"
        name="major"
        placeholder="Your Major"
        value={formData.major}
        onChange={handleChange}
        required
        className="bg-white/90"
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};