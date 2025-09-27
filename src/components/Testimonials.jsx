const testimonials = [
  {
    name: "Aditi Sharma",
    text: "The AI Band Score prediction really helped me prepare better. I scored 7.5 in my IELTS!",
  },
  {
    name: "Ravi Patel",
    text: "Mock tests felt just like the real exam. The support team is amazing!",
  },
  {
    name: "Emily Thomas",
    text: "Speaking practice with instant feedback boosted my confidence. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <p className="italic text-gray-700 mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-blue-600">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
