import React from 'react';
import { motion } from 'motion/react';
import { PenLine, Share2, Palette, Megaphone, Users, Workflow, Mail, BarChart3 } from 'lucide-react';

const skills = [
  {
    icon: PenLine,
    title: 'Content Marketing',
    description: 'Topic and SEO research through to finished posts, built around what an audience is already looking for.'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Planning, producing, and scheduling social content designed to build consistent engagement and organic audience growth.'
  },
  {
    icon: Palette,
    title: 'Brand Marketing',
    description: 'Brand identity, voice, and visual assets that keep a business looking consistent everywhere customers find it.'
  },
  {
    icon: Megaphone,
    title: 'Campaign Management',
    description: 'Planning promotional campaigns from initial concept through launch, then reviewing performance to identify what should be improved or repeated.'
  },
  {
    icon: Users,
    title: 'Lead Generation & Nurturing',
    description: 'Turning engagement into real conversations, then following up on a schedule so interest does not cool off.'
  },
  {
    icon: Workflow,
    title: 'CRM & Marketing Automation',
    description: 'Pipelines and automated workflows that route, track, and follow up on leads without manual chasing.'
  },
  {
    icon: Mail,
    title: 'Email & Outreach',
    description: 'Outreach and follow-up sequences written to earn a reply, not just to fill an inbox.'
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Pulling performance data into clear reports, so decisions come from more than a hunch.'
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <p className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Core Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What I Do</h2>
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
                  <h3 className="text-base font-bold text-slate-900 mb-1">{skill.title}</h3>
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
