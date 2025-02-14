import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">PES MCOE</span> Hackathon
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transform Your Ideas into Reality
          </p>
          <div className="glass-card inline-block p-4 mb-8">
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div>
                <span className="text-primary">500+</span> Participants
              </div>
              <div>
                <span className="text-primary">36</span> Hours
              </div>
              <div>
                <span className="text-primary">₹50K</span> in Prizes
              </div>
            </div>
          </div>
          <div>
            <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors mr-4">
              Register Now
            </button>
            <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}