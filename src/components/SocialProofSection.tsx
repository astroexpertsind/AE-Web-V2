import React from 'react';
import { ShieldCheck, TrendingUp, Users, ArrowRight, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../config/constants';
import { TestimonialSlider } from './TestimonialSlider';

interface SocialProofSectionProps {
  onOpenAudit: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenAudit }) => {
  return (
    <section id="case-studies" className="py-24 bg-[#FBFBFC] border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Occult Practitioner Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            PROVEN CLIENT RESULTS & SOCIAL PROOF
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Discover how Vedic astrologers, tarot readers, numerologists, and occult consultants scale to predictable pre-paid consultation pipelines with our Done-For-You growth system.
          </p>
        </div>

        {/* Aggregate Stats Overview Ribbon */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200/90 shadow-2xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 font-heading">
              ₹2.8Cr+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-700 mt-1">
              Client Revenue Generated
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Across consultations & remedies
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200/90 shadow-2xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-[#FF5B00] font-heading">
              4.7x
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-700 mt-1">
              Average Meta Ads ROAS
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              High-intent paid bookings
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200/90 shadow-2xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-zinc-950 font-heading">
              85+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-700 mt-1">
              Occult Masters Scaled
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Astrology, Tarot, Vastu & KP
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200/90 shadow-2xs text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-heading">
              94%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-zinc-700 mt-1">
              Client Retention Rate
            </div>
            <div className="text-[11px] text-zinc-500 mt-0.5">
              Long-term partner contracts
            </div>
          </div>
        </div>

        {/* Framer Motion Responsive Testimonial Slider Component */}
        <TestimonialSlider onOpenAudit={onOpenAudit} />

        {/* Confidentiality & Ethics Trust Footer */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex-shrink-0 flex items-center justify-center text-[#FF5B00]">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-zinc-950">
                100% NDA Protection & Reputation Safeguards
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed max-w-xl">
                We understand that occult consulting requires profound personal discretion. If you prefer white-label privacy, your name, client list, and ad accounts remain strictly confidential under our signed Non-Disclosure Agreement.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'social_proof_bottom_cta' });
              onOpenAudit();
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-[#e04f00] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
