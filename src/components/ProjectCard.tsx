import React from 'react';
import { motion } from 'motion/react';
import type { Project } from '../types/project';
import { ScreenshotGallery } from './ui/ScreenshotGallery';

const LABEL = 'text-xs font-bold text-slate-400 uppercase tracking-wider mb-3';
const TAG =
  'inline-flex items-center px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-xs font-medium';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
    >
      {project.label && (
        <h4 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">
          {project.label}
        </h4>
      )}
      <h3
        className={`font-bold text-slate-900 mb-4 ${
          project.featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
        }`}
      >
        {project.title}
      </h3>
      <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl">{project.positioning}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h4 className={LABEL}>{project.challenge ? 'Business Challenge' : 'Objective'}</h4>
          <p className="text-slate-600 leading-relaxed">{project.challenge ?? project.objective}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h4 className={LABEL}>My Role</h4>
          <p className="text-slate-600 leading-relaxed">{project.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <h4 className={LABEL}>Marketing Skills</h4>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className={TAG}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className={LABEL}>Tools &amp; Platforms</h4>
          {project.tools.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className={TAG}>
                  {tool}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-400 font-medium">To be documented</p>
          )}
        </div>
      </div>

      {project.caseStudy && (
        <div className="mb-10">
          <h4 className={LABEL}>Scope of Work</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.caseStudy.map((section) => (
              <div
                key={section.title}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
              >
                <h5 className="text-base font-bold text-slate-900 mb-2">{section.title}</h5>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{section.body}</p>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={item} className={TAG}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.reflection && (
        <div className="mb-10">
          <h4 className={LABEL}>Reflection</h4>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 leading-relaxed">{project.reflection}</p>
          </div>
        </div>
      )}

      {project.approach && project.approach.length > 0 && (
        <div className="mb-10">
          <h4 className={LABEL}>How It Works</h4>
          <ol className="space-y-3">
            {project.approach.map((step, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 shadow-sm">
                  {i + 1}
                </span>
                <span className="flex-grow bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mb-2">
        <h4 className={LABEL}>Outcome &amp; Evidence</h4>
        <div className="bg-white border border-dashed border-slate-300 rounded-xl px-5 py-4">
          <p className="text-sm text-slate-500 leading-relaxed">
            Results and supporting evidence for this project are being compiled and will be added here.
          </p>
        </div>
        <ScreenshotGallery
          images={project.images}
          placeholderLabel={`Screenshots for ${project.title} to be added`}
        />
      </div>
    </motion.article>
  );
}
