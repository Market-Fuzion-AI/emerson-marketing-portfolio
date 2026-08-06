import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const EMAIL = 'e.alvarenga3592@icloud.com';
const LINKEDIN = 'https://www.linkedin.com/in/emerson-alvarenga-280158248/';
const GITHUB = 'https://github.com/Market-Fuzion-AI';

const linkClass =
  'inline-flex items-center gap-2 py-1 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

/**
 * The site's single contact area. Kept deliberately concise so contact
 * details live in exactly one global location rather than repeating
 * across pages.
 */
export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="text-electric-teal font-semibold tracking-wide uppercase text-sm mb-3">Contact</h2>
            <p className="text-xl font-bold text-white mb-2">Let&rsquo;s work together.</p>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Always happy to talk about marketing work. Email is the quickest way to reach me.
            </p>
          </div>

          <nav aria-label="Contact links" className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <a href={`mailto:${EMAIL}`} className={linkClass} aria-label={`Email Emerson at ${EMAIL}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="Emerson on LinkedIn (opens in a new tab)"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="Emerson on GitHub (opens in a new tab)"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </nav>
        </div>

        <p className="mt-10 pt-6 border-t border-slate-800 text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Emerson Alvarenga
        </p>
      </div>
    </footer>
  );
}
