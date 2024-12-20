export const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-[#E0F2FE] border-b-4 border-black">
      <div className="container max-w-6xl">
        <div className="text-center section-fade">
          <h2 className="text-4xl font-black mb-8">
            Trusted by Students Nationwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-16 bg-white rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
            ))}
          </div>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-2xl font-bold mb-4">
              92% of users felt more confident after their first session
            </p>
            <p className="text-gray-700">Join thousands of students already benefiting from peer mentorship</p>
          </div>
        </div>
      </div>
    </section>
  );
};