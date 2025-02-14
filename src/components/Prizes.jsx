import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const prizes = [
  {
    icon: <FaTrophy className="w-12 h-12 text-yellow-500" />,
    title: "First Prize",
    amount: "₹20,000",
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Mentorship",
      "Mentorship Sessions"
    ]
  },
  {
    icon: <FaMedal className="w-12 h-12 text-gray-400" />,
    title: "Second Prize",
    amount: "₹15,000",
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Certificates",
      "Mentorship Sessions"
    ]
  },
  {
    icon: <FaAward className="w-12 h-12 text-amber-700" />,
    title: "Third Prize",
    amount: "₹10,000",
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Certificates",
      "Mentorship Sessions"
    ]
  }
];

export default function Prizes() {
  return (
    <section id="prizes" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Prizes & Rewards</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card text-center"
            >
              <div className="flex justify-center mb-4">
                {prize.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{prize.title}</h3>
              <p className="text-2xl font-bold text-primary mb-4">{prize.amount}</p>
              <ul className="text-left space-y-2">
                {prize.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}