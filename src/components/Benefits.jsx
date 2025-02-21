import { motion } from "framer-motion";
import { FaMedal, FaCertificate, FaUsers } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    {
      icon: <FaMedal className="w-10 h-10 text-primary" />,
      title: "🏆 Recognition",
      description: "Get recognized by industry experts and establish your presence in the tech community.",
    },
    {
      icon: <FaCertificate className="w-10 h-10 text-primary" />,
      title: "📜 Certificates",
      description: "Earn official certificates to boost your portfolio and showcase your achievements.",
    },
    {
      icon: <FaUsers className="w-10 h-10 text-primary" />,
      title: "🤝 Networking",
      description: "Connect with professionals, mentors, and like-minded innovators.",
    },
  ];

  return (
    <section id="benefits" className="py-20 border-t border-b border-neutral-200 dark:border-neutral-600 mt-8">
      {/* Background Glow Effect */}
      {/* <div className="absolute inset-0"></div> */}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-primary glow-text mb-4">🎁 What You Will Get?</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Exclusive <b>rewards, recognition, and networking opportunities</b> to take your career to the next level!
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl shadow-xl bg-gray-400/20 backdrop-blur-md border border-gray-700 hover:scale-105 transition-all duration-300 text-center"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-40 blur-lg"></div>

              {/* Icon */}
              <div className="flex justify-center mb-4">{benefit.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-primary mb-3">{benefit.title}</h3>
              <p className="text-gray-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
}
