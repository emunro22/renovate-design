import type { FaqItem } from "@/lib/faqs";

interface FaqProps {
  items: FaqItem[];
  title?: string;
  id?: string;
}

function Faq({ items, title = "Frequently Asked Questions", id = "faq" }: FaqProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id={id} className="scroll-mt-32 py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">{title}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group bg-gray-50 rounded-xl p-5 open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 list-none">
                {item.question}
                <span className="ml-4 shrink-0 text-blue-500 transition-transform group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
