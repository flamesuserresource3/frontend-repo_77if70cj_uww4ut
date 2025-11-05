import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
              <Sparkles size={14} /> Mindful soundscapes powered by AI
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Heal with music, guided by intelligence
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              AuralMind blends clinically-informed music therapy with adaptive AI to help you regulate mood,
              reduce stress, and focus. Crafted sound journeys respond to your intentions in real-time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" id="get-started">
              <a
                href="#benefits"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-sm"
              >
                <Play size={18} /> Start a calming session
              </a>
              <a
                href="#learn-more"
                className="px-5 py-3 rounded-xl bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* 3D Spline Scene */}
          <div className="order-1 lg:order-2">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] w-full rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
              {/* subtle gradient edge */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-gray-100/60" />
              <Spline
                scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
