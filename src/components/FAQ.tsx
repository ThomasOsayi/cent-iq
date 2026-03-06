"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: "What is Cent-IQ?",
    answer:
      "Cent-IQ is an assessment and insights platform designed for schools and institutions.",
  },
  {
    question: "How do I get started?",
    answer: "Request a demo through our form and our team will reach out to schedule a call.",
  },
  {
    question: "Is there a free trial?",
    answer: "We offer tailored trials for qualified schools and institutions. Contact us to learn more.",
  },
];

export function FAQ({ items = defaultItems }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Frequently asked questions
      </h2>
      <ul className="mt-8 space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="rounded-lg border border-zinc-200 dark:border-zinc-800"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-foreground"
            >
              {item.question}
              <span className="text-zinc-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="border-t border-zinc-200 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
