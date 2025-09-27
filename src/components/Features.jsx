const features = [
  {
    title: "Speaking Practice",
    desc: "AI-driven speaking feedback with real exam-style questions.",
    icon: "🎤",
  },
  {
    title: "Mock Tests",
    desc: "Full-length IELTS mock tests with instant results.",
    icon: "📝",
  },
  {
    title: "AI Band Score",
    desc: "Predict your band score using machine learning insights.",
    icon: "🤖",
  },
  {
    title: "24/7 Support",
    desc: "Get answers anytime with our dedicated mentor support.",
    icon: "💬",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">Our Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-gray-50"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
