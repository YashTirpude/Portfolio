import React, { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

import { Toaster, toast } from "react-hot-toast";
import FadeInView from "./animations/FadeInView";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20">
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
            Get In Touch
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInView delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Let's Connect
              </h3>
              <p className="text-gray-400">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+917083264911"
                  className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Phone size={24} />
                  <span>+91 7083264911</span>
                </a>
                <a
                  href="mailto:tirpudeyash7@gmail.com"
                  className="flex items-center space-x-3 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Mail size={24} />
                  <span>tirpudeyash7@gmail.com</span>
                </a>
                <div className="flex space-x-6 pt-4">
                  <a
                    href="https://github.com/YashTirpude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/yash-tirpude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default Contact;
