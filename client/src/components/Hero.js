import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pfp.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-brown-800 pb-24 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:pl-16">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl text-brown-cream font-cormorant"
            >
              Hello, I'm Mafruha !
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r font-medium from-brown-accent via-brown-muted to-brown-600 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              CS @ University at Buffalo
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-brown-muted"
            >
              {HERO_CONTENT}
              <p className=" max-w-xl py-6 ">
                Feel free to reach out and say Hi 👋🏼
              </p>
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:30, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 1, delay: 1.2}}
            src={profilePic} alt="Maf" className="w-[24rem] h-[24rem] object-cover rounded-2xl mt-12" />
          </div>
        </div>
      </div>
    </div>
  );
};
// 👩🏽‍💻

export default Hero;
