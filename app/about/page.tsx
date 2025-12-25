import { getPortfolioData } from '@/lib/utils';

export default function AboutPage() {
  const { aboutPage, taxonomy } = getPortfolioData();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {aboutPage.sections.map((section) => (
          <section key={section.id} className="mb-20">
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-6">
              {section.heading}
            </h2>

            {section.content && (
              <p className="text-lg leading-relaxed text-gray-800 mb-8">
                {section.content}
              </p>
            )}

            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="text-lg text-gray-700">
                    • {item}
                  </li>
                ))}
              </ul>
            )}

            {section.id === 'methodology' && (
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {taxonomy.lenses.map((lens) => (
                  <div key={lens.name} className="p-6 border-l-4 border-black">
                    <h3 className="text-xl font-bold mb-3">{lens.name}</h3>
                    <p className="text-gray-700">{lens.description}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
