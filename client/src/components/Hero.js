import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilepic 1.png"
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl">
              Hello, I'm Mafruha !
            </h1>
            
            <span className="bg-gradient-to-r font-medium from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              CS @ University at Buffalo
            </span>
            <p className="my-2 max-w-xl py-6 tracking-tighter">
                {HERO_CONTENT}
            </p>
            
            <p>
            Feel free to reach out and say Hi 👋🏼
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img src={profilePic} alt="Maf" className="w-3/4" />
        </div>

        </div>
      </div>
    </div>
  );
};
// 👩🏽‍💻 

export default Hero;
