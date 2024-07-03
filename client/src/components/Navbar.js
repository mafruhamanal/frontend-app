import logo from "../assets/maflogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-11" src={logo} alt="Maf" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-neutral-800">
        <a href="https://www.linkedin.com/in/mafruhamanal/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mafruhamanal">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/_mafruha?igsh=dTc5bmFlNW80YXgy&utm_source=qr">
        <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
