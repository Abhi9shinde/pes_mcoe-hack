import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCalendar, FaMapMarkerAlt, FaUsers, FaClock, FaTrophy, FaRocket } from 'react-icons/fa';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Calculate the event date 50 days from now
    const now = new Date();
    const eventDate = new Date(now.getTime() + 50 * 24 * 60 * 60 * 1000).getTime();

    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = eventDate - currentTime;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-3xl font-bold text-primary">{value}</div>
          <div className="text-sm text-muted-foreground capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
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
        <div className="absolute dark:inset-0 right-0 top-0 w-1/2 h-full filter blur-3xl dark:opacity-30 opacity-40">
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
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Title Section - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass-card p-8 flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">PES MCOE</span><br />
              Hackathon 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transform Your Ideas into Reality
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                Register Now
              </button>
              <button className="glass hover:bg-white/40 dark:hover:bg-white/10 text-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Event Starts In</h3>
            <CountdownTimer />
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              <FaUsers className="text-4xl text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">500+</h3>
                <p className="text-muted-foreground">Participants</p>
              </div>
            </div>
          </motion.div>

          {/* Event Duration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              <FaClock className="text-4xl text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">36 Hours</h3>
                <p className="text-muted-foreground">Non-Stop Coding</p>
              </div>
            </div>
          </motion.div>

          {/* Prize Pool */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass-card p-8 flex items-center justify-center"
          >
            <div className="flex items-center gap-4">
              <FaTrophy className="text-4xl text-primary" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">₹50K+</h3>
                <p className="text-muted-foreground">In Prizes</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-6 grid md:grid-cols-2 gap-6"
        >
          {/* Event Details */}
          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <FaCalendar className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Event Date</h3>
                <p className="text-muted-foreground">March 16-17, 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-4 mt-4">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Venue</h3>
                <p className="text-muted-foreground">PES MCOE Campus, Pune</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <FaRocket className="text-2xl text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors">
                    Problem Statements
                  </button>
                  <button className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors">
                    Schedule
                  </button>
                  <button className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors">
                    Rules
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}