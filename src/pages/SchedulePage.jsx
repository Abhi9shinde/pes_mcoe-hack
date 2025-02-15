import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

export default function SchedulePage() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Event Schedule
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Mark your calendar! Here's the complete timeline of the hackathon, 
          from registration to the final presentation.
        </p>
      </motion.div>
      <Timeline />
    </div>
  );
}