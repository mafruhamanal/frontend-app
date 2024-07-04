import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I'm Mafruha Manal, currently an undergrad in Computer Science 🚀 I like to dabble in a whole lot of web dev stuff 👩🏽‍💻, and lately I've been really into exploring mobile dev as well !📲

`;

export const ABOUT_TEXT = `I love to code (🤯) and enjoy working on little projects on the side 💻 It's always so so fun to just dive in and learn new skills first-hand, it's how I learn best! Outside of programming, I enjoy doing digital art 🖌️, playing video games 🎮 and watching k-dramas 🍿 for fun.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Engineer Intern",
    company: "X Lab",
    description: `Develop a cross-platform mobile app in React Native to monitor indoor farms at the lab with Augmented Reality. Currently working on a coordinate-specific metric display for 3D plant models to monitor plant health and identify signs of diseases/deficiencies`,
    technologies: ["React_Native", "Firebase", "Unity", "C#", "Javascript"],
  },
  {
    year: "July 2024 - Present",
    role: "Undergraduate Research Aide",
    company: "University at Buffalo",
    description: `Maintain Wireless Topology Tool, a Flask web app for topology simulation to integrate real geographic data for wireless network research. Integrate a dynamic display feature for NS3 simulation results by transforming large JSON topology data.`,
    technologies: ["Flask", "MySQL", "JavaScript", "Python"],
  },
  {
    year: "Jan 2020 - Jun 2022",
    role: "Founder & Coding Instructor",
    company: "Brown Women for STEM",
    description: `Provided 30 underprivileged students with one-on-one lessons in Computer Science and Mathematics once a week. Connected 7 women with full-ride college scholarships totaling $151,000 by mentoring students through their
application processes, holding monthly meet-ups to facilitate access to resources and opportunities.`,
    technologies: ["HTML", "CSS", "Javascript", "Python"],
  },
  {
    year: "June 2020 - Dec 2022",
    role: "Technical Lead",
    company: "Amino Apps",
    description: `Supervised a team of 20 curators, overseeing an online community of 2 million+ members under Narvii, Inc. Settled 20+ support tickets daily using internal dev tools and Jira to resolve technical flags in public servers.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Mama Well App",
    image: project1,
    description:
      "Developed an iOS care app for postpartum mothers, awarded Honorable Mentions at the 2024 Black Wings Hacks. Integrated features for tracking common post-labor symptoms and monitoring water intake to promote self-care. Implemented a booking system with integrated reminders for doctor appointments or check-ins post-labor.",
    technologies: ["React_Native", "Firebase", "Firestore", "Expo"],
  },
  {
    title: "Clay Clutter App",
    image: project2,
    description:
      "Built a full-stack CRUD web app for pottery artists to help accelerate pottery documentation and progress. Implemented essential features including user registration, customizable clay progress stages, and content feeds. Authenticated users with JSON Web Tokens and bcrypt hashing to facilitate secure user logins.",
    technologies: ["React", "MongoDB", "Express.js", "Node.js"],
  },
  {
    title: "Auto-Sneakers Bot",
    image: project5,
    description:
      "Wrote a Python script to send WhatsApp alerts any time a pair of limited edition trainers is available in my size. Automatically adds the item to my shopping cart on eBay, streamlining my purchasing processes to minimize the risk of missing highly sought-after products!",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Pywhatkit"],
  },
  {
    title: "Personal Website",
    image: project3,
    description:
      "Built a simple portfolio website to share a little about myself, my tech ventures and the lil side projects I've done ✨",
    technologies: ["React", "JavaScript", "Tailwind", "Framer_Motion"],
  },
];

export const CONTACT = {
  address: "Buffalo, New York, NY 14215 ",
  phoneNo: "+1 716 986 2914",
  email: "mafruhamanal1@gmail.com",
};
