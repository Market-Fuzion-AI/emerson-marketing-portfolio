import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-primary-blue font-semibold tracking-wide uppercase text-sm mb-3">404</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Page not found</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            That page doesn&rsquo;t exist. It may have been moved or removed.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-primary-blue text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
