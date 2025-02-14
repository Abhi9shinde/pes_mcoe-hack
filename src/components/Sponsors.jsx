import { motion } from 'framer-motion';

const sponsorTiers = [
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" }
    ]
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      { name: "Zepto", logo: "path/to/zepto-logo.png" },
      { name: "GeeksforGeeks", logo: "path/to/gfg-logo.png" },
      { name: "TUF Gaming", logo: "path/to/tuf-logo.png" }
    ]
  },
  {
    tier: "Bronze Sponsors",
    sponsors: [
      { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" }
    ]
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
        </motion.div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: tierIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass-card"
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">{tier.tier}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-48 h-24 flex items-center justify-center"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}