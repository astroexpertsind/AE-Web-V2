import React from 'react';

export interface AstroExpertsLogoProps {
  className?: string;
  variant?: 'light-bg' | 'dark-bg' | 'official-badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean; // kept for interface backwards-compatibility
}

/**
 * Official Astro Experts Brand Logo
 * 
 * CRITICAL BRAND REQUIREMENT:
 * Uses the exact, official, unaltered Astro Experts logo asset directly
 * from `/assets/astro-experts-logo.svg` (and `/ae-logo.svg`).
 * Never regenerated, redrawn, recolored, or substituted.
 * Proportions and visual styling are strictly preserved.
 */
export const AstroExpertsLogo: React.FC<AstroExpertsLogoProps> = ({
  className = '',
  variant = 'light-bg',
  size = 'md',
}) => {
  // Height presets maintaining exact proportional scaling
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11 md:h-12',
    lg: 'h-12 sm:h-14 md:h-16',
    xl: 'h-16 sm:h-20 md:h-24',
  };

  const selectedHeight = heightClasses[size] || heightClasses.md;

  // Use the exact original asset directly:
  // For dark backgrounds (if any), astro-experts-logo-white.svg is available;
  // for standard and light backgrounds, astro-experts-logo.svg is used.
  const logoSrc = variant === 'dark-bg' 
    ? '/assets/astro-experts-logo-white.svg' 
    : '/assets/astro-experts-logo.svg';

  const logoImage = (
    <img
      src={logoSrc}
      alt="Astro Experts"
      className={`w-auto ${selectedHeight} max-w-full object-contain shrink-0 select-none ${className}`}
      loading="eager"
      decoding="async"
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    />
  );

  if (variant === 'official-badge') {
    return (
      <div className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl shadow-sm border border-zinc-200">
        {logoImage}
      </div>
    );
  }

  return logoImage;
};
