import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 pt-14">
      <h2 className="my-12 text-center text-4xl text-fuchsia-300 font-medium">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>

        <div className="rounded-2xl p-4">
          <SiMongodb className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl  p-4">
          <FaNodeJs className="text-5xl text-lime-500" />
        </div>
        <div className="rounded-2xl p-4">
          <RiTailwindCssFill className="text-5xl text-sky-400" />
        </div>
        <div className="rounded-2xl p-4">
          <IoLogoFirebase className="text-5xl text-amber-400" />
        </div>
        <div className="rounded-2xl p-4">
          <RiReactjsLine className="text-5xl text-neutral-300" />
        </div>
        <div className="rounded-2xl  p-4">
          <FaPython className="text-5xl text-sky-900" />
        </div>
        <div className="rounded-2xl p-4">
          <SiFlask className="text-5xl text-neutral-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
