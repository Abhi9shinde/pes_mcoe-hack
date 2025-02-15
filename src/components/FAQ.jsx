import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "What is the size of team?",
    answer: "Teams can consist of 2-4 members. Solo participation is not allowed."
  },
  {
    question: "Is there any participation fees?",
    answer: "No, participation is completely free for all selected participants."
  },
  {
    question: "Hackathon is online or offline?",
    answer: "This is an offline hackathon that will take place at PES MCOE campus."
  },
  {
    question: "Food & living facility?",
    answer: "Yes, we provide food and accommodation for all participants during the event."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Disclosure>
                  {({ open }) => (
                    <div className="glass-card">
                      <Disclosure.Button className="flex justify-between w-full px-4 py-4 text-left">
                        <span className="text-lg font-medium">{faq.question}</span>
                        <FaChevronDown
                          className={`w-5 h-5 transition-transform ${
                            open ? 'transform rotate-180' : ''
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-4 text-gray-500">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}