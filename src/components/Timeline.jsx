import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: "15 March, 10:PM",
    title: "Registration Ends",
    description: "We'll review your application and will let you know."
  },
  {
    date: "16 March, 10:PM",
    title: "Workshops Start",
    description: "Starting off with guidance sessions."
  },
  {
    date: "16 March, 10:PM",
    title: "Check-in Starts",
    description: "Check-in and get ready for the event."
  },
  {
    date: "16 March, 10:PM",
    title: "Opening Ceremony",
    description: "Let's kickoff! #PESMCOE with us!"
  },
  {
    date: "16 March, 10:PM",
    title: "Hackathon Starts",
    description: "Join with over 500+ participants and start hacking!"
  },
  {
    date: "17 March, 10:PM",
    title: "Hackathon Ends",
    description: "We'll review your project and will let you know."
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  {index % 2 === 0 && (
                    <div className="glass-card">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-primary">{event.date}</p>
                      <p className="text-gray-300 mt-2">{event.description}</p>
                    </div>
                  )}
                </div>
                <div className="relative flex items-center justify-center w-8">
                  <div className="h-4 w-4 rounded-full bg-primary"></div>
                </div>
                <div className="w-1/2 pl-8">
                  {index % 2 !== 0 && (
                    <div className="glass-card">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <p className="text-primary">{event.date}</p>
                      <p className="text-gray-300 mt-2">{event.description}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}