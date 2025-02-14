import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function ProblemStatements() {
  return (
    <section id="problems" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Problem Statements</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Choose from a variety of challenging problem statements across different domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-colors">
            View Problem Statements
            <FaArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
}