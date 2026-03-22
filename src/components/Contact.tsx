import React, { useRef, useState, useEffect } from "react";
import { Mail, Github, Linkedin, Send, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import FadeInView from "./animations/FadeInView";

// Star interface for TS
interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starArray: Star[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    }));
    setStars(starArray);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
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
    <section
      id="contact"
      className="relative bg-[#030014] py-24 overflow-hidden"
    >
      <Toaster position="bottom-right" />

      {/* 1. Cosmic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        {/* Twinkling Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInView>
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-16">
            Get In Touch
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeInView delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="tel:+917083264911"
                  className="flex items-center space-x-4 text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                    <Phone size={24} />
                  </div>
                  <span className="text-lg">+91 7083264911</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:tirpudeyash7@gmail.com"
                  className="flex items-center space-x-4 text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="text-lg">tirpudeyash7@gmail.com</span>
                </motion.a>

                <div className="flex space-x-4 pt-4">
                  {[
                    { icon: Github, href: "https://github.com/YashTirpude" },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/yash-tirpude",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-xl text-purple-400 hover:text-white hover:bg-purple-600 transition-all border border-white/10"
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.4}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md"
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="block w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="block w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center py-4 border border-transparent text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  "Sending Signal..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default Contact;
