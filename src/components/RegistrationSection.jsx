import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import confetti from 'canvas-confetti';
import { User, Mail, Phone, Building2, ArrowRight, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { webinarData } from '../data/webinarData';

// Zod Validation Schema
const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(80, { message: 'Name cannot exceed 80 characters' }),
  workEmail: z
    .string()
    .email({ message: 'Please enter a valid work email address' })
    .refine((email) => !email.endsWith('@test.invalid'), {
      message: 'Invalid email domain',
    }),
  phoneNumber: z
    .string()
    .min(7, { message: 'Please enter a valid phone number (at least 7 digits)' })
    .max(20, { message: 'Phone number is too long' })
    .regex(/^[+0-9\s\-()]+$/, { message: 'Please enter numbers, spaces, and valid phone characters' }),
  company: z
    .string()
    .min(2, { message: 'Company / Organization name is required' })
    .max(100, { message: 'Company name too long' }),
});

export const RegistrationSection = () => {
  const { registration } = webinarData;
  const [submissionState, setSubmissionState] = useState('idle'); // idle | loading | success | error
  const [submissionResult, setSubmissionResult] = useState(null);
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      company: '',
    },
  });

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#6D28D9', '#8B5CF6', '#A78BFA', '#EDE9FE', '#22D3EE'],
      });
    } catch {
      // Fallback gracefully if canvas is unavailable
    }
  };

  const onSubmit = async (data) => {
    setErrorMessage('');
    setSubmissionState('loading');

    try {
      if (isDemoMode) {
        // Explicitly Labeled Demo Mode: Simulates network latency and verifies validation
        await new Promise((resolve) => setTimeout(resolve, 900));

        const mockResponse = {
          status: 'success',
          mode: 'demo',
          registrationId: `MNV-${Math.floor(100000 + Math.random() * 900000)}`,
          registeredAt: new Date().toLocaleTimeString(),
          attendee: {
            name: data.fullName,
            email: data.workEmail,
            company: data.company,
          },
          message: 'Registration simulated successfully! In production, this links to your enterprise CRM or webhook.',
        };

        setSubmissionResult(mockResponse);
        setSubmissionState('success');
        triggerCelebration();
      } else {
        // Live Endpoint mode (Configurable webhook / API backend)
        const response = await fetch('/api/webinar/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            webinarId: 'ai-manufacturing-2026',
            timestamp: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Backend responded with status ${response.status}. Please configure your API handler or switch to Demo Mode.`
          );
        }

        const json = await response.json();
        setSubmissionResult(json);
        setSubmissionState('success');
        triggerCelebration();
      }
    } catch (err) {
      setSubmissionState('error');
      setErrorMessage(
        err.message || 'An unexpected error occurred during submission. Please try again.'
      );
    }
  };

  const handleReset = () => {
    reset();
    setSubmissionState('idle');
    setSubmissionResult(null);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Purple Gradient Banner Container matching reference */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#4C1D95] via-[#6D28D9] to-[#2E1065] shadow-banner-glow border border-brand-400/30">
          
          {/* Subtle Ambient Factory Lighting Effect in Background */}
          <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden">
            <svg className="w-full h-full object-cover" viewBox="0 0 1200 600" preserveAspectRatio="none">
              <defs>
                <linearGradient id="neonGlow" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Skyline building silhouettes */}
              <polygon points="0,600 40,460 90,460 90,600 130,520 180,520 220,410 260,410 270,600 350,500 390,500 440,380 480,380 520,600 620,530 680,480 720,480 770,600 850,450 910,450 950,530 1000,420 1050,420 1100,600 1200,600" fill="url(#neonGlow)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-4 sm:p-8 md:p-10 lg:p-14 items-center">
            
            {/* Left Column: Heading and Messaging */}
            <div className="lg:col-span-6 text-white space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-purple-200">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span>Limited Free Virtual Passes</span>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight text-white drop-shadow-sm break-words">
                {registration.heading}
              </h2>

              <p className="text-sm sm:text-lg text-purple-100/90 leading-relaxed max-w-lg">
                {registration.subheading}
              </p>

              {/* Event Benefits Mini List */}
              <div className="pt-2 space-y-2.5 text-xs sm:text-sm text-purple-200 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Immediate access confirmation & calendar invite</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Live interactive Q&A with manufacturing AI leadership</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full on-demand video recording & slides deck post-session</span>
                </div>
              </div>

              {/* Mode Switcher Pill */}
              <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs">
                <span className="text-purple-300/80">Submission Mode:</span>
                <button
                  type="button"
                  onClick={() => setIsDemoMode(!isDemoMode)}
                  className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white/25 border border-white/20 text-white font-mono transition-colors flex items-center gap-1.5"
                  title="Toggle between Demo Sandbox and Live API Endpoint"
                >
                  <span className={`w-2 h-2 rounded-full ${isDemoMode ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                  <span>{isDemoMode ? 'Demo Sandbox Mode' : 'Live API Mode'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: White Registration Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-9 shadow-2xl border border-surface-border relative">
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-900">
                    {registration.cardTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary mt-1">
                    Fill in your details below to reserve your complimentary virtual seat.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submissionState === 'success' ? (
                    /* Success Confirmation State */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-6 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xl font-heading font-extrabold text-navy-900">
                          {isDemoMode ? 'Demo Registration Confirmed!' : 'Registration Successful!'}
                        </h4>
                        <p className="text-sm text-secondary max-w-sm mx-auto">
                          Thank you, <strong className="text-navy-900">{submissionResult?.attendee?.name}</strong>. A confirmation email has been dispatched to <strong className="text-navy-900">{submissionResult?.attendee?.email}</strong>.
                        </p>
                      </div>

                      {/* Ticket / Confirmation Details Card */}
                      <div className="p-4 rounded-xl bg-surface-lavender border border-brand-200 text-left text-xs space-y-1.5 text-navy-900">
                        <div className="flex justify-between font-mono">
                          <span className="text-secondary">Reference Code:</span>
                          <span className="font-bold text-brand-700">{submissionResult?.registrationId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Company:</span>
                          <span className="font-medium">{submissionResult?.attendee?.company}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-secondary">Date & Time:</span>
                          <span className="font-medium">Tue, 25 Nov 2026 • 4:00 PM IST</span>
                        </div>
                      </div>

                      {isDemoMode && (
                        <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                          <strong>Note:</strong> You submitted in <em>Demo Sandbox Mode</em>. No sensitive data was transmitted or stored.
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy-900 hover:bg-brand-700 text-white text-xs font-semibold font-heading transition-colors"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Register Another Colleague</span>
                      </button>
                    </motion.div>
                  ) : (
                    /* Registration Form */
                    <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold text-navy-900 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            id="fullName"
                            type="text"
                            placeholder="Your Name"
                            {...register('fullName')}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                              errors.fullName
                                ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                                : 'border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.fullName.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label htmlFor="workEmail" className="block text-xs font-semibold text-navy-900 mb-1.5">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            id="workEmail"
                            type="email"
                            placeholder="Work Email"
                            {...register('workEmail')}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                              errors.workEmail
                                ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                                : 'border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                            }`}
                          />
                        </div>
                        {errors.workEmail && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.workEmail.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs font-semibold text-navy-900 mb-1.5">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            id="phoneNumber"
                            type="tel"
                            placeholder="Phone Number"
                            {...register('phoneNumber')}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                              errors.phoneNumber
                                ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                                : 'border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                            }`}
                          />
                        </div>
                        {errors.phoneNumber && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.phoneNumber.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Company / Organization */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-semibold text-navy-900 mb-1.5">
                          Company / Organization <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <input
                            id="company"
                            type="text"
                            placeholder="Company / Organization"
                            {...register('company')}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-navy-900 placeholder:text-slate-400 bg-slate-50/60 focus:bg-white focus:outline-none transition-all ${
                              errors.company
                                ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                                : 'border-surface-border focus:border-brand-500 focus:ring-2 focus:ring-brand-100'
                            }`}
                          />
                        </div>
                        {errors.company && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.company.message}</span>
                          </p>
                        )}
                      </div>

                      {/* Error Banner if API fails */}
                      {submissionState === 'error' && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || submissionState === 'loading'}
                        className="w-full mt-2 py-3.5 px-6 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-heading font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group active:scale-[0.99] disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                      >
                        {submissionState === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Reserving Your Seat...</span>
                          </>
                        ) : (
                          <>
                            <span>Register Now</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>

                      {/* Privacy & Anti-spam note */}
                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-secondary/80 pt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                        <span>We respect your privacy. No spam. Unsubscribe anytime.</span>
                      </div>
                    </form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
