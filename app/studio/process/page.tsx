import { getPortfolioData } from '@/lib/utils';

export default function ProcessPage() {
  const { processPage } = getPortfolioData();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {processPage.heading}
          </h1>
          <p className="text-lg text-gray-700">
            {processPage.subheading}
          </p>
        </div>

        <div className="space-y-16">
          {processPage.steps.map((step) => (
            <div key={step.number} className="flex gap-8">
              <div className="flex-shrink-0">
                <span className="text-5xl font-bold text-gray-300">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
