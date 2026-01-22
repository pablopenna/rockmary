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
        <h2 className="text-4xl font-bold text-contrast mb-8">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-contrast mb-6">Get in Touch</h3>
            <p className="text-contrast-two mb-6">
              If you're interested in working with us or would like more information, feel free to reach out using the form. You can also contact us directly at:
            </p>
            <a 
              href="mailto:contact@rockmary.com"
              className="text-aux-2 hover:text-chocolate-plum text-lg font-semibold underline"
            >
              contact@rockmary.com
            </a>
            <p className="text-contrast-two mt-6">
              We will get back to you as soon as we can. Thank you.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-base-two p-8 rounded-lg">
            {submitted && (
              <div className="mb-6 p-4 bg-aux-1 text-base border border-aux-1 rounded">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-contrast mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-contrast-three rounded-lg focus:ring-2 focus:ring-aux-1 focus:border-transparent bg-base text-contrast"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-contrast mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-contrast-three rounded-lg focus:ring-2 focus:ring-aux-1 focus:border-transparent bg-base text-contrast"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-contrast mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-contrast-three rounded-lg focus:ring-2 focus:ring-aux-1 focus:border-transparent bg-base text-contrast"
                  placeholder="Tell us about your project"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-aux-2 hover:bg-chocolate-plum text-base font-bold py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
