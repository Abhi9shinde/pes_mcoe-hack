import { FaInstagram, FaDiscord, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p className="text-gray-300">
              THE PROGRESSIVE EDUCATION SOCIETY'S<br />
              MODERN COLLEGE OF ENGINEERING (PES MCOE)<br />
              LOCATED AT 1186/A, SHIVAJI NAGAR, OFF J.M.<br />
              ROAD, PUNE, MAHARASHTRA 411005
            </p>
            <div className="mt-6">
              <p className="text-lg font-medium italic">
                "IT'S NOT JUST ABOUT WRITING CODE,<br />
                IT'S ABOUT THE EXPERIENCE"
              </p>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Email: hackathon@mcoe.edu.in</p>
              <p className="text-gray-300">Phone: +91 1234567890</p>
            </div>
            <div className="mt-6 flex md:justify-end gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaDiscord className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© 2024 PES MCOE Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}