import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaTrophy, FaMedal, FaAward, FaCheckCircle } from "react-icons/fa";

const prizes = [
  {
    icon: <FaTrophy className="w-14 h-14 text-yellow-400" />,
    title: "First Prize",
    amount: 20000, 
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Mentorship",
      "Exclusive Mentorship Sessions"
    ]
  },
  {
    icon: <FaMedal className="w-14 h-14 text-gray-400" />,
    title: "Second Prize",
    amount: 15000,
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Certificates",
      "Mentorship Sessions"
    ]
  },
  {
    icon: <FaAward className="w-14 h-14 text-amber-600" />,
    title: "Third Prize",
    amount: 10000,
    benefits: [
      "Cash Prize",
      "Internship Opportunities",
      "Valuable Certificates",
      "Mentorship Sessions"
    ]
  }
];

const CountUp = ({ amount }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp;
    const duration = 1500; 
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * amount));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, amount]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default function Prizes() {
  return (
    <section id="prizes" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">🏆 Prizes & Rewards</h2>
          <p className="text-gray-500 text-lg">
            Compete and win exciting rewards, mentorship, and career opportunities!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 shadow-lg border border-white/10 text-center"
            >
              <div className="flex justify-center mb-4">{prize.icon}</div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{prize.title}</h3>
              <p className="text-2xl font-bold text-yellow-400 mb-4">
                ₹<CountUp amount={prize.amount} />
              </p>

              <ul className="text-left space-y-2">
                {prize.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-gray-500">
                    <FaCheckCircle className="text-green-400 mr-2" />
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
