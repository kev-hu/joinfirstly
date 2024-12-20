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
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-3 mx-auto">
      {[
        { name: "name", placeholder: "Your Name", type: "text" },
        { name: "email", placeholder: "Your Email", type: "email" },
        { name: "major", placeholder: "Your Major", type: "text" }
      ].map((field) => (
        <Input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name as keyof typeof formData]}
          onChange={handleChange}
          required
          className="bg-white border-2 border-black rounded-lg px-4 py-3 text-lg font-medium placeholder:text-gray-500 focus:ring-2 focus:ring-primary"
        />
      ))}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary border-2 border-black rounded-lg px-6 py-3 text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-0.5 transition-transform disabled:opacity-50"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};