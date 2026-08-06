import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">Portfolio</p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Selected Work</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Four projects covering the marketing I have done in practice: brand development and campaign
            management for a local launch, content marketing and social media week to week, and the CRM and
            marketing automation behind lead generation and lead nurturing. AI-assisted workflows support content
            strategy and production. Screenshots and results are being added as they are compiled.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
