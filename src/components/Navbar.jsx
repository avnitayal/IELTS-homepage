export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">IELTS Pro</div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#home" className="hover:text-blue-600 cursor-pointer">Home</a>
        </li>
        <li>
          <a href="#features" className="hover:text-blue-600 cursor-pointer">Courses</a>
        </li>
        <li>
          <a href="#testimonials" className="hover:text-blue-600 cursor-pointer">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 cursor-pointer">Contact</a>
        </li>
      </ul>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:block">
        Join Now
      </button>
    </nav>
  );
}
