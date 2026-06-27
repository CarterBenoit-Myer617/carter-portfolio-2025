import { getPortfolioData } from '@/lib/utils';

export default function ContactPage() {
  const { contactPage } = getPortfolioData();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">
            {contactPage.heading}
          </h1>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Email
            </h2>
            <a
              href={`mailto:${contactPage.email}`}
              className="text-2xl md:text-3xl font-semibold hover:text-gray-600 transition-colors"
            >
              {contactPage.email}
            </a>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-600 mb-4">
              Connect
            </h2>
            <div className="flex flex-col gap-4">
              {contactPage.social.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:text-gray-600 transition-colors"
                >
                  {link.platform} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
