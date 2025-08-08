"use client";
import { send } from "@emailjs/browser";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconSend,
  IconDownload,
  IconCheck,
} from "@tabler/icons-react";
import { useState } from "react";
import SectionHeader from "../common/section-header";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.message || !formData.name) return;

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      return;

    try {
      setIsLoading(true);
      setIsSuccess(false);

      const data = await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (data.status === 200) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <IconBrandGithub />,
      url: "https://github.com/heronet",
      label: "GitHub",
      description: "View my code repositories",
    },
    {
      icon: <IconBrandLinkedin />,
      url: "https://linkedin.com/in/siratul-islam",
      label: "LinkedIn",
      description: "Connect professionally",
    },
    {
      icon: <IconBrandTwitter />,
      url: "https://twitter.com/devsirat",
      label: "Twitter",
      description: "Follow my updates",
    },
    {
      icon: <IconMail />,
      url: "mailto:email@sirat.me",
      label: "Direct Email",
      description: "Send me an email",
    },
  ];

  const resumeLinks = [
    {
      href: "/resume_ee.pdf",
      filename: "Resume - Sirat.pdf",
      label: "Resume (EE)",
      description: "Electrical Engineering focused",
    },
    {
      href: "/resume_cs.pdf",
      filename: "Resume - Sirat.pdf",
      label: "Resume (CS)",
      description: "Computer Science focused",
    },
    {
      href: "/cv.pdf",
      filename: "CV - Sirat.pdf",
      label: "CV (EECS)",
      description: "Comprehensive academic CV",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-24 p-4 md:p-8 w-full" id="contact">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a question or want to work together?"
      />

      {/* Resume Downloads */}
      <div className="p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl mb-4">
        <h3 className="text-xl font-bold mb-4 md:mb-6">
          Download My Resume / CV
        </h3>
        <div className="gap-3 flex max-md:flex-wrap">
          {resumeLinks.map((resume, i) => (
            <a
              key={i}
              href={resume.href}
              download={resume.filename}
              className="group w-full p-4 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/20 hover:border-blue-500/40 rounded-xl transition-all flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {resume.label}
                </p>
                <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {resume.description}
                </p>
              </div>
              <IconDownload className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Contact Form */}
        <div className="p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl lg:col-span-2">
          <div className="mb-4 md:mb-8">
            <h3 className="text-2xl font-bold mb-2">Send Me a Message</h3>
            <p className="text-neutral-400">
              I&apos;ll get back to you as soon as possible
            </p>
          </div>

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3">
              <IconCheck className="w-5 h-5 text-green-400" />
              <p className="text-green-400 font-medium">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 text-neutral-200"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-neutral-500"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 text-neutral-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-neutral-500"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-3 text-neutral-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none placeholder-neutral-500"
                placeholder="Tell me about your project, ideas, or just say hello..."
                required
              />
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-semibold rounded-xl transition-all disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <IconSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Social Links */}
          <div className="p-4 md:p-8 bg-white/5 border border-white/10 rounded-2xl h-full">
            <h3 className="text-xl font-bold mb-4 md:mb-6">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all flex items-center space-x-4"
                >
                  <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                    {link.icon}
                  </span>
                  <div>
                    <p className="font-medium text-white group-hover:text-blue-300 transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center md:mt-8 md:pt-8 mt-4 pt-4 border-t border-white/10">
              <p className="text-neutral-400 text-sm">
                Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
