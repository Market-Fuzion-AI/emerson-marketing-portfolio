import React from 'react';
import { motion } from 'motion/react';
import { PenLine, Share2, Workflow, BarChart3 } from 'lucide-react';

const categories = [
  {
    title: 'Content & Creative',
    icon: PenLine,
    items: ['Content Marketing', 'Copywriting', 'Content Production', 'Video Production', 'Branding', 'Canva']
  },
  {
    title: 'Social & Community',
    icon: Share2,
    items: ['Social Media Marketing', 'Community Marketing', 'Organic Growth', 'Instagram']
  },
  {
    title: 'Automation & CRM',
    icon: Workflow,
    items: ['Marketing Automation', 'Lead Management', 'CRM', 'Make.com', 'ManyChat', 'Slack']
  },
  {
    title: 'Strategy & Measurement',
    icon: BarChart3,
    items: ['Campaign Management', 'Email Marketing', 'SEO', 'Analytics & Reporting', 'AI-Assisted Marketing']
  }
];

export function MarketingToolkit() {
  return (
    <section id="marketing-toolkit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Skills &amp; Tools</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Marketing Toolkit</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              The skills and platforms I work with across content, social, campaigns, and lead management.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white text-primary-blue rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">{category.title}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 hover:border-primary-blue/30 hover:shadow-md transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-electric-teal shrink-0" />
                      <span className="font-medium text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
