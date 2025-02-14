import { motion } from 'framer-motion';
import { FaMedal, FaCertificate, FaUsers } from 'react-icons/fa';

export default function Benefits() {
  const benefits = [
    {
      icon: <FaMedal className="w-8 h-8 text-primary" />,
      title: "Recognition",
      description: "Get recognized by industry experts and establish your presence in the tech community."
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-primary" />,
      title: "Certificates",
      description: "Earn certificates of participation and achievement to boost your portfolio."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-primary" />,
      title: "Networking",
      description: "Connect with industry professionals, mentors, and fellow participants."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What You Will Get?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card text-center"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}