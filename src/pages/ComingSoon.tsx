import React from 'react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  backHref?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title = 'Coming Soon',
  subtitle = 'We are preparing something special. Stay tuned for exciting updates from Sublime House of Tea.',
  backHref = '/',
}) => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-gradient-to-br from-emerald-50 to-white px-4 py-16 text-center">
      <span className="inline-flex items-center rounded-full bg-[#316763]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#316763]">
        Blogs &amp; News
      </span>
      <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">{title}</h1>
      <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">{subtitle}</p>
      <Link
        to={backHref}
        className="inline-flex items-center gap-2 rounded-md bg-[#316763] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#285853]"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ComingSoon;
