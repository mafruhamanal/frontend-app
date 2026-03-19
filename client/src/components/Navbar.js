
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mb-4 flex items-center justify-between py-2 gap-4">
      <div className="flex flex-shrink-0 text-2xl gap-4 items-center text-brown-muted hover:[&>a]:text-brown-accent [&>a]:transition-colors [&>a]:duration-200">
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
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-brown-muted hover:[&>a]:text-brown-accent [&>a]:transition-colors [&>a]:duration-200">
      <a  href= "mailto: mafruhamanal1@gmail.com">
      <MdOutlineEmail />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
