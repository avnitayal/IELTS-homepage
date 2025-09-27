export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-600 text-white text-center md:text-left py-8 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">IELTS Pro</h3>
          <p>Helping students achieve their dream band scores since 2025.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p>Email: support@ieltspro.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <p className="mt-8 text-sm">© 2025 IELTS Pro. All rights reserved.</p>
    </footer>
  );
}
