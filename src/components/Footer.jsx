import { FaInstagram, FaDiscord, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <img src="gmap.png" alt="Location" className="w-7 h-9 mr-3" />
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              THE PROGRESSIVE EDUCATION SOCIETY&apos;S <br />
              MODERN COLLEGE OF ENGINEERING (PES MCOE) <br />
              1186/A, SHIVAJI NAGAR, OFF J.M. ROAD <br />
              PUNE, MAHARASHTRA 411005
            </p>
            <div className="mt-4 overflow-hidden rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.472113209071!2d73.84392477519178!3d18.5261981825684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07e4111123b%3A0x3f92335c2e5c8400!2sP.E.S.%20Modern%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1739620620370!5m2!1sen!2sin"
                width="100%"
                height="200"
                className="border-none"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="md:text-right mt-24">
            <h3 className="text-2xl font-bold mb-4">📞 Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-400">
                ✉️ Email:{" "}
                <a
                  href="mailto:hackathon@mcoe.edu.in"
                  className="hover:underline text-yellow-500 font-medium"
                >
                  hackathon@mcoe.edu.in
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                📱 Phone:{" "}
                <a
                  href="tel:+911234567890"
                  className="hover:underline text-yellow-500 font-medium"
                >
                  +91 1234567890
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex md:justify-end justify-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-yellow-500 transition-all transform hover:scale-110"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-yellow-400 transition-all transform hover:scale-110"
              >
                <FaDiscord className="w-8 h-8" />
              </a>
              <a
                href="#"
               className="text-gray-500  hover:text-yellow-400 transition-all  transform hover:scale-110"
              >
                <FaFacebook className="w-8 h-8" />
              </a>
            </div>
            <div className="mt-6 border-l-4 border-yellow-500 pl-4 text-left ml-36">
              <p className="text-lg font-medium italic text-gray-700 dark:text-gray-300">
                &quot;IT&apos;S NOT JUST ABOUT WRITING CODE, IT&apos;S ABOUT THE EXPERIENCE&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 PES MCOE Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
