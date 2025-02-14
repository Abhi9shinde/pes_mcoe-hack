import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About the Hackathon</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg">
              Join us for an exciting 36-hour hackathon where innovation meets opportunity. 
              PES MCOE Hackathon brings together brilliant minds to solve real-world problems 
              and create impactful solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-300">
              Unleash your creativity and develop innovative solutions to real-world challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-300">
              Work with like-minded individuals and learn from industry experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-300">
              Enhance your skills and gain valuable experience in a competitive environment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}