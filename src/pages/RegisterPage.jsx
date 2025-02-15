import { motion } from 'framer-motion';
import { FaUserPlus, FaUsers, FaCode, FaLaptopCode } from 'react-icons/fa';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Register for PES MCOE Hackathon
          </h1>
          <p className="text-lg text-muted-foreground">
            Join us for an exciting 36-hour coding marathon!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            Registration Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaUsers className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Team Size</h3>
                <p className="text-muted-foreground">2-4 members per team</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCode className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Skill Level</h3>
                <p className="text-muted-foreground">Open to all skill levels</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaLaptopCode className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Requirements</h3>
                <p className="text-muted-foreground">Laptop and basic coding knowledge</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUserPlus className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Registration Fee</h3>
                <p className="text-muted-foreground">Free for selected participants</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
            Register Your Team
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Registration closes on March 15, 2024
          </p>
        </motion.div>
      </div>
    </div>
  );
}