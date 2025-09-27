export default function Hero() {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 pb-12 bg-gray-50">
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Achieve Your Dream IELTS Band Score 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Personalized coaching, AI-powered band prediction, and 24/7 practice material to help you succeed.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <img
        src="https://img.freepik.com/free-vector/exam-preparation-concept-illustration_114360-2285.jpg"
        alt="IELTS Banner"
        className="w-full md:w-1/2 mt-10 md:mt-0"
      />
    </section>
  );
}
