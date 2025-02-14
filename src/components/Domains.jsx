import { motion } from 'framer-motion';
import { FaHeartbeat, FaGraduationCap, FaMoneyBillWave, FaCubes, FaMicrochip, FaLightbulb } from 'react-icons/fa';

const domains = [
  {
    icon: <FaHeartbeat className="w-8 h-8 text-primary" />,
    title: "Health",
    description: "Innovative solutions for healthcare challenges"
  },
  {
    icon: <FaGraduationCap className="w-8 h-8 text-primary" />,
    title: "Education",
    description: "Transforming the future of learning"
  },
  {
    icon: <FaMoneyBillWave className="w-8 h-8 text-primary" />,
    title: "Finance",
    description: "Revolutionary fintech solutions"
  },
  {
    icon: <FaCubes className="w-8 h-8 text-primary" />,
    title: "WEB3",
    description: "Decentralized applications and services"
  },
  {
    icon: <FaMicrochip className="w-8 h-8 text-primary" />,
    title: "IoT",
    description: "Connected devices and smart solutions"
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-primary" />,
    title: "Innovation",
    description: "Open category for creative solutions"
  }
];

export default function Domains() {
  return (
    <section id="domains" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Hackathon Domains</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card text-center"
            >
              <div className="flex justify-center mb-4">
                {domain.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{domain.title}</h3>
              <p className="text-gray-300">{domain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}