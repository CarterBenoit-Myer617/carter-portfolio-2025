import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StickyNavigation } from './StickyNavigation';

const PRODUCTS = [
  {
    title: 'Vol. 1: Mothering Nature',
    category: 'Research Zine',
    price: '$28.00',
    description:
      'An editorial exploration of Black stewardship in New England. 48 pages of archival photography and typographic essays.',
    cta: 'Inquire',
  },
  {
    title: 'Benoît Display',
    category: 'Typeface License',
    price: '$40.00',
    description:
      'A sharp, high-contrast display serif designed for manifesto work. Rooted in the history of editorial printing. Desktop & Web license.',
    cta: 'Join Waitlist',
  },
  {
    title: 'Dad Vail Gold',
    category: 'Screenprint Edition',
    price: '$120.00',
    description:
      '18x24" hand-pulled print on French Paper. A visual study of discipline, repetition, and the hydrodynamics of rowing. Signed edition of 25.',
    cta: 'Inquire',
  },
];

export const StudioShopPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] text-white font-['Inter',sans-serif] overflow-x-hidden">
      <StickyNavigation variant="dark" />
      
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-9xl font-normal leading-[0.9] tracking-tight mb-8 text-white">
            Studio Supply
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-12 leading-relaxed text-[#D1D5DB]">
            Tangible extensions of the research. A collection of printed matter, type design, and limited editions generated from the intersection of athletics and cultural preservation.
          </p>
          <a
            href="#collection"
            className="inline-flex items-center justify-between border border-white/10 px-8 py-5 min-h-[44px] hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <span className="text-lg">View Collection</span>
            <ArrowRight className="ml-6 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>

      <section id="collection" className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="aspect-[3/4] bg-[#111827] mb-6 border border-white/10" />
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl mb-2 tracking-tight">{product.title}</h3>
                <p className="text-sm uppercase tracking-[2px] text-[#9CA3AF] mb-3">{product.category}</p>
                <p className="text-xl mb-4">{product.price}</p>
                <p className="text-sm leading-relaxed text-[#D1D5DB]">{product.description}</p>
              </div>
              <Link
                to="/contact"
                className="w-full min-h-[44px] border border-white/10 px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center justify-center"
              >
                {product.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="mb-6 text-3xl md:text-4xl">Quality & Provenance</h2>
          <p className="text-lg leading-relaxed text-[#D1D5DB] mb-8">
            Every item is produced in limited runs with a focus on sustainable materials. Printed matter is produced locally in Philadelphia or New England.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center min-h-[44px] text-lg border-b border-white/30 hover:border-white transition-colors"
          >
            Inquiries & Wholesale
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
