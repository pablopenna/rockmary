'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1000);
  };

  return (
    <section id="contact" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-12">Get in touch</h2>
        <div className="space-y-8">
          <div>
            <p className="text-lg text-contrast-two mb-8 leading-relaxed">
              Whether you have a fully-fleshed-out idea or just want to see if I am a good match, feel free to drop me a line. I typically respond within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
            <div className="bg-base-two p-6 rounded-lg border-l-4 border-chocolate-plum hover:shadow-lg transition h-full">
              <p className="text-sm text-contrast-three font-semibold mb-4 uppercase tracking-wide">Email</p>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="mailto:contact@rockmary.com"
                  className="text-xl font-bold text-contrast hover:text-chocolate-plum transition"
                >
                  contact@rockmary.com
                </a>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {copiedId === 'email' && <span className="text-sm text-contrast-two">Copied!</span>}
                  <button
                    onClick={() => handleCopy('contact@rockmary.com', 'email')}
                    className="p-2 rounded-lg hover:bg-base transition text-xl"
                    title="Copy to clipboard"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-base-two p-6 rounded-lg border-l-4 border-aux-1 hover:shadow-lg transition h-full">
              <p className="text-sm text-contrast-three font-semibold mb-4 uppercase tracking-wide">LinkedIn</p>
              <div className="flex items-center justify-between gap-4">
                <a
                  href="https://linkedin.com/in/pprdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-contrast hover:text-aux-1 transition"
                >
                  Connect with me on LinkedIn
                </a>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {copiedId === 'linkedin' && <span className="text-sm text-contrast-two">Copied!</span>}
                  <button
                    onClick={() => handleCopy('https://linkedin.com/in/pprdev/', 'linkedin')}
                    className="p-2 rounded-lg hover:bg-base transition text-xl"
                    title="Copy to clipboard"
                  >
                    📋
                  </button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-contrast-two text-lg pt-4">
            Thank you.
          </p>
        </div>
      </div>
    </section>
  );
}
