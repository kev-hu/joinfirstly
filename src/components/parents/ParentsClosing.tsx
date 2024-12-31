import { Button } from "@/components/ui/button";

export const ParentsClosing = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">
          Give Your Teen the Peer Support They Need to Succeed
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join our community of students and parents who are already experiencing
          the benefits of peer mentoring
        </p>
        <Button 
          size="lg"
          className="text-lg font-bold bg-primary text-white rounded-lg border-4 border-accent shadow-[4px_4px_0px_0px_#221F26] transform transition-all hover:-translate-y-0.5 hover:shadow-[4px_6px_0px_0px_#221F26]"
        >
          Join Now & Start Your Free Trial
        </Button>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="text-muted-foreground">
            <div className="font-semibold mb-1">Featured In</div>
            <div className="text-sm">Major Education Publications</div>
          </div>
          <div className="text-muted-foreground">
            <div className="font-semibold mb-1">Partnered With</div>
            <div className="text-sm">Leading Educational Institutions</div>
          </div>
          <div className="text-muted-foreground">
            <div className="font-semibold mb-1">Satisfaction Guaranteed</div>
            <div className="text-sm">30-Day Money-Back Promise</div>
          </div>
        </div>
      </div>
    </section>
  );
};