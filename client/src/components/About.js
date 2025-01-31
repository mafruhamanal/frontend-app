import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-24 pt-16">
      <h1 className="py-6 text-center text-4xl font-medium">
        <motion.span
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-purple-300"
        >
          About Me
        </motion.span>
      </h1>
      <div className="flex flex-wrap">
        {/*<motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          /*
          <div className="flex items-center justify-center">
             <img alt="About Me" className="w-3/4 py-12" /> 
          </div>
          
        </motion.div>*/}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 mt-24 py-2 mx-auto"
        >
          <div className="flex justify-center">
            <div className="max-w-xl text-neutral-700 text-center">
              {ABOUT_TEXT}
              <p className="max-w-xl py-6"></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
