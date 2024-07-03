import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-24 pt-16">
      <h1 className="py-6 text-center text-4xl font-medium">
        <span className="text-purple-300">About Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="About Me" className="w-3/4" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start mt-32">
            <div className="max-w-xl py-6 text-neutral-700">
              {ABOUT_TEXT}
              <p className="max-w-xl py-6 ">
                I'm also a huge Frank Ocean fan! 🎧 Channel Orange on loop + a
                good can of redbull makes for a real good study session every
                single time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
