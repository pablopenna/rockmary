'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-contrast mb-12">Get in touch</h2>
        
        
          {/* Left side - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-lg text-contrast-two mb-8 leading-relaxed">
                Whether you have a fully-fleshed-out idea or just want to see if I am a good match, feel free to drop me a line. I typically respond within one business day.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max">
              {/* Email Card */}
              <div className="bg-base-two p-6 rounded-lg border-l-4 border-chocolate-plum hover:shadow-lg transition h-full">
                <p className="text-sm text-contrast-three font-semibold mb-2 uppercase tracking-wide">Email</p>
                <a
                  href="mailto:contact@rockmary.com"
                  className="text-xl font-bold text-contrast hover:text-chocolate-plum transition"
                >
                  contact@rockmary.com
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-base-two p-6 rounded-lg border-l-4 border-aux-1 hover:shadow-lg transition h-full">
                <p className="text-sm text-contrast-three font-semibold mb-2 uppercase tracking-wide">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/pprdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-contrast hover:text-aux-1 transition"
                >
                  Connect with me on LinkedIn
                </a>
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
