import React from 'react';
import { Brain, Heart, Headphones } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Personalized Therapy',
    desc: 'Adaptive soundscapes respond to your goals—calm, focus, sleep—guided by neuroscience-informed cues.'
  },
  {
    icon: Heart,
    title: 'Mood Tracking',
    desc: 'Lightweight reflections before and after each session help map your emotional trends over time.'
  },
  {
    icon: Headphones,
    title: 'Hi‑Fi Sound Engine',
    desc: 'Layered textures and gentle rhythms mixed in real-time for a studio-quality listening experience.'
  }
];

const Features = () => {
  return (
    <section id="benefits" className="relative py-16 sm:py-20 bg-gray-50">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Why it works</h2>
          <p className="mt-3 text-gray-600">
            Rooted in evidence-based practice and designed for everyday wellbeing. Start small, feel the difference.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
              <div className="mt-4 text-sm text-gray-500">Learn more →</div>
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div id="learn-more" className="mt-12 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready for your first session?</h3>
              <p className="mt-1 text-white/70">Pick an intention and we’ll craft a gentle 10‑minute journey to get you started.</p>
            </div>
            <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 hover:bg-white/90 transition-colors">
              Begin now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
