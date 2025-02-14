import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" >
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-80"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-primary glow-text mb-4">🔥 PES MCOE Hackathon</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A **36-hour non-stop coding marathon** where creativity meets real-world impact!  
            Join 500+ innovators to **build, learn, and win exciting prizes**. 🚀
          </p>
        </motion.div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "🚀 Innovation",
              description: "Push boundaries and build groundbreaking solutions!",
              delay: 0.2,
            },
            {
              title: "🤝 Collaboration",
              description: "Work with amazing people & learn from industry mentors.",
              delay: 0.4,
            },
            {
              title: "🏆 Growth & Rewards",
              description: "Compete for top prizes, internships & exclusive goodies!",
              delay: 0.6,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl shadow-xl bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:scale-105 transition-all duration-300"
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-40 blur-lg"></div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
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
          <a
            href="#register"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-opacity-90 transition-all"
          >
            🚀 Register Now – Limited Spots Available!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
