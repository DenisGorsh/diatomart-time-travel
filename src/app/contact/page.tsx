'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-navy text-parchment py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-3">Get in Touch</p>
          <h1 className="font-gothic text-4xl sm:text-5xl mb-4">Contact</h1>
          <p className="text-parchment/70 text-lg">Questions, collaborations, or press inquiries</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeading title="Write to Us" />
            {submitted ? (
              <div className="bg-parchment-dark border border-gold/30 p-8 text-center">
                <p className="font-display text-xl text-ink mb-2">Thank You</p>
                <p className="text-ink-light">Your message has been received. We will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="block text-sm text-ink-light mb-1">Name</label>
                  <input type="text" required className="w-full border border-gold/30 bg-parchment px-4 py-2 text-ink focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-light mb-1">Email</label>
                  <input type="email" required className="w-full border border-gold/30 bg-parchment px-4 py-2 text-ink focus:border-gold focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm text-ink-light mb-1">Subject</label>
                  <select className="w-full border border-gold/30 bg-parchment px-4 py-2 text-ink focus:border-gold focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Pre-Order Question</option>
                    <option>Press / Media</option>
                    <option>Collaboration</option>
                    <option>Rights & Licensing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-ink-light mb-1">Message</label>
                  <textarea required rows={5} className="w-full border border-gold/30 bg-parchment px-4 py-2 text-ink focus:border-gold focus:outline-none resize-none" />
                </div>
                <button type="submit" className="bg-burgundy text-parchment px-8 py-3 tracking-wide hover:bg-burgundy-light transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl text-ink mb-3">Diatom Art</h3>
              <div className="space-y-2 text-ink-light text-sm">
                <p>Riga, Latvia</p>
                <p>info@diatomart.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-ink mb-3">For Press</h3>
              <p className="text-ink-light text-sm">
                Media inquiries, review copies, and high-resolution images:<br />
                press@diatomart.com
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-ink mb-3">Collaborations</h3>
              <p className="text-ink-light text-sm">
                We welcome partnerships with archives, museums, historians,
                and cultural institutions across the Baltic region.
              </p>
            </div>

            <div className="bg-parchment-dark border border-gold/20 p-6">
              <h3 className="font-display text-lg text-ink mb-2">Mailing List</h3>
              <p className="text-sm text-ink-light">
                Subscribe to receive updates on the book’s progress, exclusive
                previews of archive documents, and pre-order notifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
