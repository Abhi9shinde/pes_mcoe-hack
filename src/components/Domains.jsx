import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaMoneyBillWave, FaCubes, FaMicrochip, FaLightbulb } from 'react-icons/fa';

const domains = [
  {
    icon: <FaHeartbeat className="w-10 h-10 text-primary" />,
    title: "Health",
    description: "Innovative solutions for healthcare challenges",
  },
  {
    icon: <FaGraduationCap className="w-10 h-10 text-primary" />,
    title: "Education",
    description: "Transforming the future of learning",
  },
  {
    icon: <FaMoneyBillWave className="w-10 h-10 text-primary" />,
    title: "Finance",
    description: "Revolutionary fintech solutions",
  },
  {
    icon: <FaCubes className="w-10 h-10 text-primary" />,
    title: "WEB3",
    description: "Decentralized applications and services",
  },
  {
    icon: <FaMicrochip className="w-10 h-10 text-primary" />,
    title: "IoT",
    description: "Connected devices and smart solutions",
  },
  {
    icon: <FaLightbulb className="w-10 h-10 text-primary" />,
    title: "Innovation",
    description: "Open category for creative solutions",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Hackathon Domains</h2>
          <p className="text-gray-300 text-lg">
            Explore different domains and create impactful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 shadow-lg border border-white/10 text-center"
            >
              <div className="flex justify-center mb-4">{domain.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{domain.title}</h3>
              <p className="text-gray-200">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
