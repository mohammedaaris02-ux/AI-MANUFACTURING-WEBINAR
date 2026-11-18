import React from 'react';

export const BrandLogo = ({ className = "h-8", textClassName = "text-2xl", light = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Manvian Geometric Purple Icon */}
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M6 10L14 6L22 10L14 14L6 10Z"
          fill="#7C3AED"
        />
        <path
          d="M14 14L22 10L30 14L22 18L14 14Z"
          fill="#6D28D9"
        />
        <path
          d="M6 10V22L14 26V14L6 10Z"
          fill="#8B5CF6"
        />
        <path
          d="M14 14V26L22 30V18L14 14Z"
          fill="#7C3AED"
        />
        <path
          d="M22 18V30L30 26V14L22 18Z"
          fill="#5B21B6"
        />
      </svg>
      <span className={`font-heading font-extrabold tracking-tight ${textClassName} ${light ? 'text-white' : 'text-navy-900'}`}>
        Manvian
      </span>
    </div>
  );
};
