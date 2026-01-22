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
        <h2 className="text-4xl font-bold text-contrast mb-8">Get in touch</h2>
        <div>
          <p className="text-contrast-two mb-6">
            Whether you have a fully-fleshed-out idea or just want to see if I am a good match, feel free to drop me a line. I typically respond within one business day.
          </p>
          <a
            href="mailto:contact@rockmary.com"
            className="text-aux-2 hover:text-chocolate-plum text-lg font-semibold underline"
          >
            contact@rockmary.com
          </a>
          <a
            href="https://linkedin.com/in/pprdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aux-2 hover:text-chocolate-plum underline transition"
          >
            Connect with me on LinkedIn
          </a>
        </div>
        <p className="text-contrast-two mt-6">
          Thank you.
        </p>
      </div>
    </section>
  );
}
