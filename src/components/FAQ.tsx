"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  { question: "What is CentIQ?", answer: "CentIQ is an assessment and insights platform designed for schools and institutions." },
  { question: "How do I get started?", answer: "Request a demo through our form and our team will reach out to schedule a call." },
  { question: "Is there a free trial?", answer: "We offer tailored trials for qualified schools and institutions. Contact us to learn more." },
];

export function FAQ({ items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding text-center">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-[clamp(32px,4vw,44px)] leading-[1.15] tracking-tight"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base text-text-secondary mt-3"
        >
          Everything you need to know about getting started with CentIQ.
        </motion.p>

        <div className="max-w-[680px] mx-auto mt-14 flex flex-col gap-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className={`border rounded-card overflow-hidden transition-all duration-300 bg-white ${
                  isOpen ? "border-green shadow-[0_4px_20px_rgba(11,138,94,0.06)]" : "border-border hover:border-green-light"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-extrabold shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-green text-white" : "bg-green-light text-green-dark"
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-base font-semibold group-hover:text-green transition-colors">
                      {item.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-green border-green text-white rotate-45"
                      : "border-border text-text-primary"
                  }`}>
                    <Plus size={14} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-[15px] leading-relaxed text-text-secondary text-left pl-[54px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}