import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Morphing Background */}
      <div className="absolute inset-0 -z-10">
        <svg className="w-full h-full">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
              <feColorMatrix in="blur" mode="matrix" 
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            </filter>
          </defs>
        </svg>
        <div className="absolute dark:inset-0 right-0 top-0 w-1/2 h-full  filter blur-3xl dark:opacity-30 opacity-40">
          <motion.div
            className="absolute w-96 h-96 bg-blue-400 rounded-full"
            animate={{
              x: ['0%', '100%', '50%', '0%'],
              y: ['0%', '50%', '100%', '0%'],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-purple-400 rounded-full"
            animate={{
              x: ['100%', '0%', '50%', '100%'],
              y: ['50%', '100%', '0%', '50%'],
              scale: [1.2, 0.8, 1, 1.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-indigo-400 rounded-full"
            animate={{
              x: ['50%', '0%', '100%', '50%'],
              y: ['100%', '50%', '0%', '100%'],
              scale: [0.8, 1, 1.2, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">PES MCOE</span> Hackathon
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-8">
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
            <button className="bg-primary cursor-pointer hover:bg-secondary text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors mr-4">
              Register Now
            </button>
            <button className="glass cursor-pointer hover:bg-white/40 dark:hover:bg-white/10 text-black dark:text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};