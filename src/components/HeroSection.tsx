import { HERO_CONTENT } from "../data";
import Photo from "../assets/images/Photo.jpeg";
import { motion } from "framer-motion";
const HeroSection = () => {
  const text = "Hrushikesh Reddy Kalsani";
  const letters = text.split("");
  return (
    <div className="justify-center grid grid-cols-2 pb-40">
      <div className="w-full col-span-1 ml-24">
        <div className="mt-10 ml-5">
          <h1 className="text-gray-200 text-6xl flex">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ opacity: 0, y: 50 }} // Start invisible and below
                animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger each letter
                  ease: "easeOut",
                }}
              >
                {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
              </motion.span>
            ))}
          </h1>
        </div>
        <h1 className="text-4xl mt-10 ml-5 bg-gradient-to-r from-lime-700 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Full Stack Developer
        </h1>
        <motion.div
          className="break-words text-gray-200 mt-10 ml-5 text-xl"
          initial={{ opacity: 0, y: 20 }} // Starting state
          animate={{ opacity: 1, y: 0 }} // Final state
          transition={{ duration: 1, ease: "easeOut" }} // Animation settings
        >
          {HERO_CONTENT}
        </motion.div>
      </div>
      <div className="">
        <motion.img
          src={Photo}
          alt="Girl in a jacket"
          width="400"
          height="400"
          className="ml-52 mt-10 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }} // Start faded and slightly smaller
          animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        />
      </div>
    </div>
  );
};

export default HeroSection;
