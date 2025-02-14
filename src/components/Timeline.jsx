import { motion } from "framer-motion";

const timelineEvents = [
  {
    date: "15 March, 10:PM",
    title: "Registration Ends",
    description: "We'll review your application and will let you know.",
  },
  {
    date: "16 March, 10:PM",
    title: "Workshops Start",
    description: "Starting off with guidance sessions.",
  },
  {
    date: "16 March, 10:PM",
    title: "Check-in Starts",
    description: "Check-in and get ready for the event.",
  },
  {
    date: "16 March, 10:PM",
    title: "Opening Ceremony",
    description: "Let's kickoff! #PESMCOE with us!",
  },
  {
    date: "16 March, 10:PM",
    title: "Hackathon Starts",
    description: "Join with over 500+ participants and start hacking!",
  },
  {
    date: "17 March, 10:PM",
    title: "Hackathon Ends",
    description: "We'll review your project and will let you know.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Event Timeline</h2>
          <p className="text-gray-400">Follow the roadmap to an incredible hackathon experience!</p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full hidden md:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:w-[90%] mx-auto ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Content */}
                <div className="w-full md:w-[45%]">
                  <div className="glass-card p-6 rounded-xl shadow-lg">
                    <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                    <p className="text-primary font-medium">{event.date}</p>
                    <p className="text-gray-300 mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Timeline Connector */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-lg border-4 border-gray-900">
                  <span className="font-bold text-lg">{index + 1}</span>
                </div>

                {/* Mobile Timeline Connector */}
                <div className="md:hidden flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full shadow-lg border-2 border-gray-900">
                  <span className="text-sm">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
