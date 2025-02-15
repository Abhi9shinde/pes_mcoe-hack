import { FaInstagram, FaDiscord, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 backdrop-blur-md bg-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">📍 Address</h3>
            <p className="text-gray-200 leading-relaxed">
              THE PROGRESSIVE EDUCATION SOCIETY&apos;S<br />
              MODERN COLLEGE OF ENGINEERING (PES MCOE)<br />
              1186/A, SHIVAJI NAGAR, OFF J.M. ROAD<br />
              PUNE, MAHARASHTRA 411005
            </p>
            <div className="mt-6">
              <p className="text-lg font-medium italic text-gray-300">
                &quot;IT&apos;S NOT JUST ABOUT WRITING CODE,<br />
                IT&apos;S ABOUT THE EXPERIENCE&quot;
              </p>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-white mb-4">📞 Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-200">✉️ Email: <a href="mailto:hackathon@mcoe.edu.in" className="hover:underline text-yellow-400">hackathon@mcoe.edu.in</a></p>
              <p className="text-gray-200">📱 Phone: <a href="tel:+911234567890" className="hover:underline text-yellow-400">+91 1234567890</a></p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex md:justify-end gap-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110">
                <FaDiscord className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-transform transform hover:scale-110">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>© 2024 PES MCOE Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
