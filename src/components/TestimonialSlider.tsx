import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ShieldCheck,
  TrendingUp,
  Award,
  Sparkles,
  Compass,
  Moon,
  Sun,
  Flame,
  CheckCircle2,
  Pause,
  Play,
  ArrowRight,
  ExternalLink,
  Users
} from 'lucide-react';
import { trackEvent } from '../config/constants';

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  discipline: string;
  category: 'all' | 'vedic' | 'tarot' | 'kp' | 'vastu' | 'lalkitab';
  location: string;
  experience: string;
  avatarInitials: string;
  metricHighlight: string;
  metricLabel: string;
  secondaryStat: string;
  quote: string;
  transformation: string;
  verifiedBadge: string;
  iconType: 'sparkles' | 'compass' | 'moon' | 'sun' | 'flame';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vedic-arvind',
    name: 'Pt. Arvind Shastri',
    title: 'Vedic Astrologer & Kundali Matching Specialist',
    discipline: 'Vedic Jyotish & Matchmaking',
    category: 'vedic',
    location: 'Varanasi & New Delhi',
    experience: '18+ Years Vedic Practice',
    avatarInitials: 'AS',
    metricHighlight: '+340%',
    metricLabel: 'Paid Consultation Growth',
    secondaryStat: '4.8x Meta Ads ROAS',
    transformation: 'Shifted from manual ₹500 WhatsApp chats to automated ₹2,500 pre-paid calendar bookings.',
    quote:
      'Before partnering with Astro Experts, my daily routine was overwhelmed by hundreds of casual WhatsApp messages asking for free predictions. Astro Experts created a tailored consultation funnel with Meta ad targeting specifically designed for serious seekers. Now, every single inquiry on my daily schedule is pre-paid, verified with birth charts submitted in advance. My monthly income jumped from irregular amounts to a steady ₹2.8 Lakhs.',
    verifiedBadge: 'Verified Jyotish Practitioner',
    iconType: 'sun',
  },
  {
    id: 'tarot-meera',
    name: 'Meera Singhania',
    title: 'Intuitive Tarot Master & Energy Healer',
    discipline: 'Tarot, Oracle & Chakra Healing',
    category: 'tarot',
    location: 'Mumbai, Maharashtra',
    experience: '7+ Years Practice',
    avatarInitials: 'MS',
    metricHighlight: '₹4.2L / mo',
    metricLabel: 'Consistent Revenue Scaled',
    secondaryStat: '180+ High-Ticket Clients',
    transformation: 'Packaged 30-min readings into ₹3,500 signature intuitive reading bundles booked 2 weeks out.',
    quote:
      'I was reluctant to hire standard marketing agencies because they usually push discount codes and aggressive sales scripts that dilute spiritual dignity. Astro Experts understood the sacred nature of my craft. They built an elegant, high-vibe landing page and targeted ads that attract deeply respectful clients seeking guidance, not casual entertainment. My calendar is consistently full 2 weeks ahead.',
    verifiedBadge: 'Verified Tarot Reader',
    iconType: 'moon',
  },
  {
    id: 'kp-rajeshwar',
    name: 'Dr. Rajeshwar Joshi',
    title: 'KP Astrology & Prashna Kundali Consultant',
    discipline: 'Krishnamurti Paddhati (KP) & Prashna',
    category: 'kp',
    location: 'Pune & Dubai Clientele',
    experience: '22+ Years Practice',
    avatarInitials: 'RJ',
    metricHighlight: '16+ Daily',
    metricLabel: 'Pre-Paid Consultations',
    secondaryStat: '82% Corporate Repeat Rate',
    transformation: 'Built a recurring international consultation pipeline across India, UAE, and the UK.',
    quote:
      'Most marketers treat astrology like generic e-commerce. Astro Experts is different: they understand planetary dashas, occult vocabulary, and genuine client anxieties. Their landing page and video creative strategy positioned my Prashna horary expertise to business leaders making crucial commercial decisions. We achieved a 4.6x return on ad spend within the very first month.',
    verifiedBadge: 'KP Astrology Master',
    iconType: 'compass',
  },
  {
    id: 'vastu-ananya',
    name: 'Ananya Kapoor',
    title: 'Numerology & Commercial Vastu Consultant',
    discipline: 'Vastu Shastra & Name Numerology',
    category: 'vastu',
    location: 'Bengaluru, Karnataka',
    experience: '11+ Years Practice',
    avatarInitials: 'AK',
    metricHighlight: '₹6.8 Lakhs',
    metricLabel: 'High-Ticket Vastu Audits',
    secondaryStat: '5.1x Ad Spend Return',
    transformation: 'Secured 14 commercial factory & luxury penthouse Vastu consultations in 60 days.',
    quote:
      'Commercial Vastu projects require high trust and executive authority. Astro Experts created a specialized Corporate Site Assessment qualification sequence. Rather than low-quality leads, I now speak directly with factory owners, builders, and corporate directors who value genuine Vastu calculations. The ROI has been phenomenal.',
    verifiedBadge: 'Vastu & Numerology Consultant',
    iconType: 'sparkles',
  },
  {
    id: 'lalkitab-devendra',
    name: 'Acharya Devendra Nath',
    title: 'Lal Kitab Astrologer & Gemology Specialist',
    discipline: 'Lal Kitab Remedies & Ratna Vigyan',
    category: 'lalkitab',
    location: 'Jaipur & Ahmedabad',
    experience: '15+ Years Practice',
    avatarInitials: 'DN',
    metricHighlight: 'Zero Spam',
    metricLabel: '100% Pre-Screened Leads',
    secondaryStat: '₹3.4L/mo Remedy Retainers',
    transformation: 'Eliminated 6 hours of daily back-and-forth messaging with automated qualification forms.',
    quote:
      'My biggest struggle was spending half my day answering WhatsApp messages from people who never actually booked a paid session. The Astro Experts qualification system filters out casual visitors before they reach my inbox. Every client arrives pre-educated on how my remedies work and has paid their fee upfront. I can finally focus entirely on my consultations.',
    verifiedBadge: 'Lal Kitab Specialist',
    iconType: 'flame',
  },
  {
    id: 'western-sonia',
    name: 'Sonia Batra',
    title: 'Psychological Astrologer & Synastry Expert',
    discipline: 'Western & Psychological Astrology',
    category: 'vedic',
    location: 'Chandigarh & Global NRI Clients',
    experience: '9+ Years Practice',
    avatarInitials: 'SB',
    metricHighlight: '$5,800+ USD',
    metricLabel: 'Monthly Overseas Revenue',
    secondaryStat: '+420% NRI Client Inflow',
    transformation: 'Scaled relationship synastry sessions with Indian diaspora across US, Canada, and UK.',
    quote:
      'Astro Experts helped me tap into NRI clients abroad who value in-depth psychological synastry. Their automated timezone scheduler and international payment integration eliminated all friction. I no longer worry about where next week’s clients will come from—the marketing machine runs quietly in the background 24/7.',
    verifiedBadge: 'Synastry Astrologer',
    iconType: 'sparkles',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Practitioners' },
  { id: 'vedic', label: 'Vedic & Kundali' },
  { id: 'tarot', label: 'Tarot & Healing' },
  { id: 'kp', label: 'KP & Prashna' },
  { id: 'vastu', label: 'Vastu & Numerology' },
  { id: 'lalkitab', label: 'Lal Kitab & Remedies' },
] as const;

interface TestimonialSliderProps {
  onOpenAudit: () => void;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ onOpenAudit }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filtered testimonials list
  const filteredList = TESTIMONIALS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Ensure currentIndex stays within bounds when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [selectedCategory]);

  const totalSlides = filteredList.length;
  const currentTestimonial = filteredList[currentIndex] || filteredList[0];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = totalSlides - 1;
        if (nextIndex >= totalSlides) nextIndex = 0;
        return nextIndex;
      });
    },
    [totalSlides]
  );

  const jumpToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management
  useEffect(() => {
    if (!isAutoplay || isHovered || totalSlides <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoplay, isHovered, totalSlides, paginate]);

  // Framer Motion slide variants
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 },
      },
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 30 },
        opacity: { duration: 0.22 },
      },
    }),
  };

  const renderDisciplineIcon = (type: string) => {
    switch (type) {
      case 'sun':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'moon':
        return <Moon className="w-5 h-5 text-indigo-500" />;
      case 'compass':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'flame':
        return <Flame className="w-5 h-5 text-rose-500" />;
      case 'sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#FF5B00]" />;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                trackEvent('cta_click', { location: 'testimonial_filter', category: cat.id });
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#FF5B00] text-white shadow-sm shadow-[#FF5B00]/25'
                  : 'bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 border border-zinc-200/80'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Main Slider Window */}
      <div className="relative min-h-[460px] sm:min-h-[420px] md:min-h-[380px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentTestimonial && (
            <motion.div
              key={`${currentTestimonial.id}-${currentIndex}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50 || velocity.x < -400) {
                  paginate(1);
                } else if (swipe > 50 || velocity.x > 400) {
                  paginate(-1);
                }
              }}
              className="w-full bg-white rounded-3xl border border-zinc-200 shadow-md p-6 sm:p-9 lg:p-10 relative overflow-hidden"
            >
              {/* Subtle Ambient Decorative Gradient in Background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-100/40 via-amber-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Client Profile & Verified Stats (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-r lg:border-zinc-100 lg:pr-8">
                  {/* Practitioner Identity Card */}
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF5B00] to-amber-500 text-white font-extrabold text-xl flex items-center justify-center shadow-md">
                        {currentTestimonial.avatarInitials}
                      </div>
                      <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-xs border border-zinc-200">
                        {renderDisciplineIcon(currentTestimonial.iconType)}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-zinc-950 font-heading">
                          {currentTestimonial.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          Verified
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#FF5B00]">
                        {currentTestimonial.title}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {currentTestimonial.location} • {currentTestimonial.experience}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 mb-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#FF5B00]" />
                        <span>Core Result</span>
                      </div>
                      <div className="text-2xl font-black text-zinc-950 tracking-tight font-heading">
                        {currentTestimonial.metricHighlight}
                      </div>
                      <div className="text-[11px] font-medium text-zinc-600 mt-0.5">
                        {currentTestimonial.metricLabel}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-600 mb-1">
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Campaign Stat</span>
                      </div>
                      <div className="text-lg font-extrabold text-zinc-900 tracking-tight">
                        {currentTestimonial.secondaryStat}
                      </div>
                      <div className="text-[11px] font-medium text-zinc-500 mt-0.5">
                        Audited Performance
                      </div>
                    </div>
                  </div>

                  {/* Transformation Tag */}
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 leading-snug">
                    <span className="font-bold text-zinc-900">Transformation: </span>
                    {currentTestimonial.transformation}
                  </div>
                </div>

                {/* Right Column: Quote, Verification and Stars (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  {/* Rating Stars and Discipline Badge */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-xs font-bold text-zinc-900">5.0 / 5.0</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FF5B00]" />
                      <span>{currentTestimonial.verifiedBadge}</span>
                    </div>
                  </div>

                  {/* Main Practitioner Quote */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-orange-200 absolute -top-4 -left-2 -z-0 opacity-60" />
                    <p className="relative z-10 text-sm sm:text-base text-zinc-700 font-normal leading-relaxed italic pl-3 sm:pl-4 border-l-2 border-[#FF5B00]/40">
                      “{currentTestimonial.quote}”
                    </p>
                  </div>

                  {/* Bottom Verification & Consultation CTA */}
                  <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Active Done-For-You Growth Partner</span>
                    </div>

                    <button
                      onClick={() => {
                        trackEvent('cta_click', {
                          location: 'testimonial_card_cta',
                          practitioner: currentTestimonial.id,
                        });
                        onOpenAudit();
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5B00] hover:text-[#e04f00] hover:underline cursor-pointer group"
                    >
                      <span>Get a similar growth engine for your practice</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider Controls: Arrows, Progress Indicators, and Autoplay Toggle */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Pagination Dots with Active Pill */}
        <div className="flex items-center gap-2">
          {filteredList.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => jumpToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-2.5 bg-[#FF5B00]'
                    : 'w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            );
          })}
          <span className="ml-2 text-xs font-medium text-zinc-500">
            {currentIndex + 1} of {totalSlides}
          </span>
        </div>

        {/* Navigation Buttons + Autoplay Toggle */}
        <div className="flex items-center gap-2">
          {/* Autoplay Pause/Play Toggle */}
          <button
            onClick={() => setIsAutoplay((prev) => !prev)}
            aria-label={isAutoplay ? 'Pause automated slider' : 'Resume automated slider'}
            className="p-2 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-600 transition-colors cursor-pointer text-xs flex items-center gap-1.5 px-3"
            title={isAutoplay ? 'Pause auto-sliding' : 'Play auto-sliding'}
          >
            {isAutoplay ? (
              <>
                <Pause className="w-3 h-3 text-zinc-500" />
                <span className="text-[11px] font-medium hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#FF5B00]" />
                <span className="text-[11px] font-medium hidden sm:inline">Play</span>
              </>
            )}
          </button>

          {/* Previous Slide */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-2xs hover:border-[#FF5B00]/40"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Slide */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-colors cursor-pointer shadow-2xs hover:border-[#FF5B00]/40"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mini Quick-Select Thumbnails Strip for Desktop */}
      <div className="mt-8 hidden md:grid md:grid-cols-6 gap-3">
        {filteredList.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              onClick={() => jumpToSlide(idx)}
              className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                isActive
                  ? 'bg-orange-50/70 border-[#FF5B00] shadow-xs'
                  : 'bg-white hover:bg-zinc-50 border-zinc-200 opacity-75 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-6 h-6 rounded-lg text-[10px] font-bold flex items-center justify-center text-white ${
                    isActive ? 'bg-[#FF5B00]' : 'bg-zinc-400'
                  }`}
                >
                  {item.avatarInitials}
                </div>
                <div className="text-[11px] font-bold text-zinc-900 truncate">
                  {item.name.split(' ')[0]} {item.name.split(' ')[1] || ''}
                </div>
              </div>
              <div className="text-[10px] font-extrabold text-[#FF5B00] truncate">
                {item.metricHighlight}
              </div>
              <div className="text-[9px] text-zinc-500 truncate">
                {item.discipline.split('&')[0]}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
