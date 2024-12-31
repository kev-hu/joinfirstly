export const ParentsTestimonials = () => {
  const testimonials = [
    {
      quote: "My daughter was struggling with social anxiety, but through peer mentoring, she found a friend and mentor who truly got her. She's now leading her school club and is so much more confident at home!",
      author: "Parent of Sarah, 16",
    },
    {
      quote: "I love the shared text summaries. I get a snapshot of what they discussed without intruding on my son's privacy.",
      author: "Parent of Michael, 15",
    },
    {
      quote: "An invaluable addition to our school's learning ecosystem—students helping students is a powerful model.",
      author: "Ms. Baker, High School Counselor",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Parents Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from parents who've seen the difference
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border-2 border-accent"
            >
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold text-primary">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};