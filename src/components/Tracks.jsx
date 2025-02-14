import { motion } from 'framer-motion';

const tracks = [
  {
    title: "Cyber Security",
    description: "Develop solutions for modern security challenges and protect digital assets.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    title: "AI / ML",
    description: "Create intelligent systems and machine learning solutions for real-world problems.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    title: "Blockchain",
    description: "Build decentralized applications and explore blockchain technology.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    title: "Game Dev",
    description: "Design and develop engaging games using cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Hackathon Tracks</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-48 mb-4">
                <img
                  src={track.image}
                  alt={track.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
              <p className="text-gray-300">{track.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}