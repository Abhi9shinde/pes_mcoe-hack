import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

export default function ProblemStatementsPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto glass-card p-12"
      >
        <FaLock className="w-16 h-16 mx-auto mb-6 text-primary" />
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Problem Statements Coming Soon
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Our team is carefully curating challenging and innovative problem statements 
          across various domains. Stay tuned for the big reveal!
        </p>
        <div className="space-y-4 text-left text-muted-foreground">
          <p>What to expect:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Real-world industry challenges</li>
            <li>Innovation-driven problems</li>
            <li>Multiple difficulty levels</li>
            <li>Diverse domain coverage</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}