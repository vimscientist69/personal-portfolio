import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import GitHubCalendar from "react-github-calendar";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Dark-only ramp (light + dark keys identical so OS light mode cannot show gray cells).
// colorScheme="dark" keeps the component on this palette.
const githubContributionTheme = {
  light: ["#0a0a0a", "#1a1414", "#2a2020", "#3d2e2a", "#5c433c"],
  dark: ["#0a0a0a", "#1a1414", "#2a2020", "#3d2e2a", "#5c433c"],
};

const inputClassName =
  "bg-surface border border-edge-subtle py-4 px-6 placeholder:text-secondary/80 text-white rounded-xl outline-none font-medium transition-[border-color,box-shadow] focus:border-accent/45 focus:ring-1 focus:ring-accent/25";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "williamferns-org-pfio",
        "template_dmoodgb",
        {
          name: form.name,
          to_name: "William Ferns",
          email: form.email,
          to_email: "vimscientist69@gmail.com",
          message: form.message,
        },
        "GxpcuDK4zVZixKvl6"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="github-calendar-wrap w-full pb-2 p-4 sm:p-6">
            <GitHubCalendar
              username="vimscientist69"
              colorScheme="dark"
              labels={{
                totalCount: `{{count}} contributions in the last year`,
              }}
              theme={githubContributionTheme}
            />
          </div>
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="w-full max-w-3xl mx-auto bg-[#050505] p-6 sm:p-8 rounded-2xl border border-edge-subtle"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white/90 font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className={inputClassName}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/90 font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className={inputClassName}
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white/90 font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className={inputClassName}
              />
            </label>

            <button
              type="submit"
              className="bg-accent hover:bg-accent-muted py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-[0_12px_40px_-12px_rgba(224,99,74,0.5)] transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");