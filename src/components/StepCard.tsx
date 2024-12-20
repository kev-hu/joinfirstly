import { LucideIcon } from "lucide-react";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export const StepCard = ({ icon: Icon, title, description, delay }: StepCardProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};