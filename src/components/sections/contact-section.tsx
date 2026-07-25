import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

// Inline SVG for Linkedin
const LinkedinIcon = () => (
  <svg
    className="w-4 h-4 fill-currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// Inline SVG for Dribbble
const DribbbleIcon = () => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
    <path d="M8.56 2.75c4.37 6 6 9.42 8 18.5" />
  </svg>
);

// Inline SVG for Behance
const BehanceIcon = () => (
  <svg
    className="w-4 h-4 fill-currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-4.813 3-3.1 0-5.113-2.115-5.113-5.026 0-3.004 2.089-5.074 4.964-5.074 2.809 0 4.604 1.83 4.887 4.382h-7.608c.151 1.341 1.157 2.118 2.657 2.118 1.487 0 2.298-.674 2.593-1.4 0 0 .433.003.433 0zm-4.963-4.321c-1.196 0-2.028.743-2.221 1.721h4.42c-.08-.942-.813-1.721-2.199-1.721zM6.638 15.5c1.193 0 2.086-.532 2.086-1.579 0-.909-.64-1.347-1.492-1.478.705-.205 1.248-.738 1.248-1.54 0-1.161-.968-1.703-2.251-1.703H.25v9.3h6.388zm-3.688-6.8h3.048c.632 0 1.054.269 1.054.821 0 .584-.447.854-1.096.854H2.95V8.7zm0 4.3h3.297c.725 0 1.228.291 1.228.932 0 .668-.528.968-1.298.968H2.95V13z" />
  </svg>
);

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-neutral-900 py-16 px-6 md:px-12 flex justify-center">
      <motion.div
        className="max-w-3xl w-full flex flex-col items-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header Block */}
        <div className="text-center mb-10 max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 mb-3">
            Lets work together
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-normal">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Card Container Grid */}
        <div className="w-full overflow-hidden bg-white">
          {/* Top Row: Email & Phone Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-100">
            {/* Email Column */}
            <div className="p-6 md:p-8 md:border-r border-neutral-100 flex flex-col justify-center">
              <Mail className="w-5 h-5 text-neutral-900 mb-4 stroke-[1.75]" />
              <span className="text-sm font-bold text-neutral-900">E-mail</span>
              <a
                href="mailto:Matthewemmanuel90@yahoo.com"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors mt-1"
              >
                Matthewemmanuel90@yahoo.com
              </a>
            </div>

            {/* Phone Column */}
            <div className="p-6 md:p-8 flex flex-col justify-center border-t md:border-t-0 border-neutral-100">
              <Phone className="w-5 h-5 text-neutral-900 mb-4 stroke-[1.75]" />
              <span className="text-sm font-bold text-neutral-900">Phone</span>
              <a
                href="tel:+2349124554897"
                className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors mt-1"
              >
                +234 912 455 4897
              </a>
            </div>
          </div>

          {/* Middle Row: Social Links */}
          <div className="p-6 md:p-8 border-b border-neutral-100">
            <span className="text-xs font-bold text-neutral-900 block mb-4">
              Socials
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {/* Dribbble Button */}
              <a
                href="https://dribbble.com/Lumenlabs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                <DribbbleIcon />
                Dribbble
              </a>

              {/* Linkedin Button */}
              <a
                href="https://www.linkedin.com/in/emmanuel-oko-78970a124/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                <LinkedinIcon />
                Linkedin
              </a>

              {/* Behance Button */}
              <a
                href="https://www.behance.net/emmanuelokoh56"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 text-xs font-semibold text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                <BehanceIcon />
                Behance
              </a>
            </div>
          </div>

          {/* Bottom Row: Call Consultation CTA */}
          <div className="p-6 md:p-8 flex flex-col items-start gap-4">
            <p className="text-xs md:text-sm font-semibold text-neutral-900 leading-relaxed max-w-md">
              Prefer to schedule a call instead? Book a free 30-minute
              consultation and let's discuss your project.
            </p>
            <a
              href="https://cal.com/oko-emmanuel/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-black text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors"
            >
              Let’s set up a time
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
