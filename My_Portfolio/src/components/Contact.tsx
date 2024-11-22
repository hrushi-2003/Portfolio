import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CONTACT } from "../data";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30% 0px -30% 0px" }); // Trigger at 70%

  return (
    <motion.div
      ref={ref}
      className="pb-4 mb-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.3 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-4xl text-gray-400 text-center pt-10 pb-10"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
      >
        Contact Information
      </motion.h1>

      <div className="flex justify-center">
        <div className="text-xl text-gray-400">
          {/* Address */}
          <motion.h1
            className="p-2"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {CONTACT.address}
          </motion.h1>

          {/* Email */}
          <motion.h1
            className="underline p-2"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {CONTACT.email}
          </motion.h1>

          {/* Phone Number */}
          <motion.h1
            className="text-center p-2"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {CONTACT.phoneNo}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
