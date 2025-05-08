"use client";
import { send } from "@emailjs/browser";
import { BackgroundGradient } from "../ui/background-gradient";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconSend,
  IconMapPin,
  IconBriefcase,
  IconDownload,
} from "@tabler/icons-react";
import { useState } from "react";
import SectionHeader from "../common/section-header";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
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

    console.log(formData);

    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      return;

    try {
      setIsLoading(true);

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
        alert("I've received your message and will get back to you ASAP!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: <IconBrandGithub />,
      url: "https://github.com/heronet",
      label: "GitHub",
    },
    {
      icon: <IconBrandLinkedin />,
      url: "https://linkedin.com/in/siratul-islam",
      label: "LinkedIn",
    },
    {
      icon: <IconBrandTwitter />,
      url: "https://twitter.com/devsirat",
      label: "Twitter",
    },
    {
      icon: <IconMail />,
      url: "mailto:email@sirat.me",
      label: "Email",
    },
  ];

  const contactInfo = [
    {
      icon: <IconMail className="w-5 h-5" />,
      label: "Email",
      value: "email@sirat.me",
    },
    {
      icon: <IconMapPin className="w-5 h-5" />,
      label: "Based in",
      value: "Sylhet, Bangladesh",
    },
    {
      icon: <IconBriefcase className="w-5 h-5" />,
      label: "Open for",
      value: "Freelance, Part-time, Full-time",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-24 p-4 md:p-8 w-full" id="contact">
      <SectionHeader
        title="Get In Touch"
        subtitle="Have a question or want to work together?"
      />

      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900">
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4"
              >
                <div className="p-3 bg-white/10 rounded-xl">{info.icon}</div>
                <div>
                  <p className="text-neutral-400 text-sm">{info.label}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                >
                  {isLoading ? "Sending..." : "Send Message"}

                  <IconSend className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="lg:col-span-1 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

              <div className="flex flex-col space-y-4 flex-grow">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors flex items-center space-x-3"
                  >
                    <span className="text-blue-500">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="/resume.pdf"
                  download="Resume - Sirat.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:scale-[1.01]"
                >
                  <IconDownload className="w-5 h-5" />
                  Download Resume
                </a>
                <p className="text-neutral-400 text-sm mt-4 text-center">
                  Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
