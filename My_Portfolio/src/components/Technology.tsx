import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Technology = () => {
  // Create the intersection observer hook for detecting when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.7, // Element is considered in view when 70% is visible
  });

  return (
    <div ref={ref}>
      <h1 className="text-3xl text-gray-400 text-center pb-24">Technologies</h1>
      <div className="flex justify-center">
        <div className="flex justify-center gap-4 pb-24">
          {/* React Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <FaReact className="text-blue-400 text-7xl" />
          </motion.div>

          {/* Node.js Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FaNodeJs className="text-blue-400 text-7xl" />
          </motion.div>

          {/* Python Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaPython className="text-blue-400 text-7xl" />
          </motion.div>

          {/* Java Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FaJava className="text-blue-400 text-7xl" />
          </motion.div>

          {/* Database Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaDatabase className="text-blue-400 text-7xl" />
          </motion.div>

          {/* GitHub Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaGithub className="text-blue-400 text-7xl" />
          </motion.div>

          {/* HTML5 Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaHtml5 className="text-blue-400 text-7xl" />
          </motion.div>

          {/* CSS3 Icon */}
          <motion.div
            className="border border-neutral-800 p-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FaCss3 className="text-blue-400 text-7xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
