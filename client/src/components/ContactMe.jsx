import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useAlert } from "react-alert";

const ContactMe = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Rohith-Manjunath" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/rohith-m-kira" },
    { icon: FaInstagram, url: "https://www.instagram.com/rohith_kira/" },
    { icon: FaTwitter, url: "https://twitter.com/rohith_m_kira" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://portfolio-7qyf.onrender.com/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, subject }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        alert.error(data?.err || data?.message || "Something went wrong");
        setLoading(false);
      } else {
        alert.success(data?.message || "Message sent successfully");
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      }
    } catch (error) {
      alert.error("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact Me
        </motion.h2>
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-center mb-12 text-purple-400"
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let's Work Together
        </motion.h3>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mb-6 text-lg">
              Coding from Frontend to Backend. Reach out to discuss how we can
              create impressive web solutions together. With expertise in both
              frontend and backend development, I'm ready to turn your ideas
              into fully functional and dynamic websites.
            </p>
            <p className="mb-6 text-lg">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:rohithmanjunath@hotmail.com"
                className="text-purple-400 hover:underline"
              >
                rohithmanjunath@hotmail.com
              </a>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="lg:w-1/2 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                value={name}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="email"
                name="email"
                value={email}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-semibold">
                Subject
              </label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                type="text"
                id="subject"
                name="subject"
                value={subject}
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                value={message}
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
