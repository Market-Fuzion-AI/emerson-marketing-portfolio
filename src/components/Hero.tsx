import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-electric-teal/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-blue/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary-blue text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-blue mr-2"></span>
              Open to digital marketing roles
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Emerson Alvarenga <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-electric-teal">
                Digital Marketing Specialist
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              I work across content marketing, social media, and campaign execution, with a focus on turning
              attention into leads. I&rsquo;ve launched a local brand from the ground up and built the CRM and
              automation workflows that keep those leads moving.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-primary-blue text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="https://www.linkedin.com/in/emerson-alvarenga-280158248/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <Linkedin className="mr-2 h-5 w-5 text-[#0A66C2]" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
