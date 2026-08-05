import React from 'react';
import { motion } from 'motion/react';
import { PenLine, Share2, Mail, Users, Megaphone, Search, Workflow, BarChart3 } from 'lucide-react';

const skills = [
  {
    icon: PenLine,
    title: 'Content Marketing',
    description: 'Researching topics, developing angles, and producing content built to be published, not just planned.'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Producing and scheduling social content, and growing an audience organically around a brand.'
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'Planning and running promotional campaigns from concept through to publication and follow-up.'
  },
  {
    icon: Users,
    title: 'Lead Management & CRM',
    description: 'Qualifying leads and moving them through defined pipeline stages so nothing is lost in the process.'
  },
  {
    icon: Workflow,
    title: 'Marketing Automation',
    description: 'Connecting marketing tools so routine follow-up, routing, and notifications happen automatically.'
  },
  {
    icon: Mail,
    title: 'Email & Direct Outreach',
    description: 'Preparing tailored outreach and follow-up sequences that keep conversations moving.'
  },
  {
    icon: Search,
    title: 'SEO & Content Research',
    description: 'Using search and topic research to decide what to create before committing production time to it.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Tracking how content and campaigns perform, and reporting on what is worth repeating.'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What I Do</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 text-left"
              >
                <div className="w-10 h-10 shrink-0 bg-blue-50 text-primary-blue rounded-lg flex items-center justify-center">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{skill.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
