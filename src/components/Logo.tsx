import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: string; // e.g. "size-8", "h-8 w-8"
  textSize?: string; // e.g. "text-xl", "text-2xl"
  showSubtitle?: boolean;
  showBadge?: boolean;
}

export function Logo({
  className = '',
  iconSize = 'h-8 w-8',
  textSize = 'text-xl',
  showSubtitle = true,
  showBadge = true,
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Exact 1:1 Product Icon from ERP App */}
      <svg
        viewBox="0 0 32 32"
        className={`${iconSize} shrink-0 select-none shadow-xs rounded-lg`}
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" fill="#0f766e" />
        <path d="M7 9h8v6H7zM17 9h8v6h-8zM7 17h8v6H7z" fill="#ecfdf5" />
        <path d="M17 17h8v6h-8z" fill="#f59e0b" />
      </svg>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSize} font-bold tracking-tight text-slate-900 font-sans leading-none`}>
            Plotline
          </span>
          {showBadge && (
            <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-bold text-teal-800 border border-teal-200 leading-none">
              ERP
            </span>
          )}
        </div>
        {showSubtitle && (
          <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
            Colony &amp; Township Software
          </span>
        )}
      </div>
    </div>
  );
}
