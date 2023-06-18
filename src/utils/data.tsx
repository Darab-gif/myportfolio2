import { FaEnvelope, FaPhone, FaLocationArrow, FaLaptop } from "react-icons/fa";
import project from "../assets/project.png";
import citadel from "../assets/citadel.png";
import crappo from "../assets/crappo.png";
import fitness from "../assets/fitness.png";
import qrcode from "../assets/qrcode.png";
import dentol from "../assets/dentol.png";

interface Social {
  id: number;
  icon: any;
  descr: string;
  info: string | number | any;
}

export const social: Social[] = [
  {
    id: 1,
    icon: <FaEnvelope />,
    descr: "EMAIL",
    info: <a href="mailto:darabcode@gmail.com">darabcode@gmail.com</a>,
  },
  {
    id: 2,
    icon: <FaPhone />,
    descr: "PHONE",
    info: "+2348130396203",
  },
  {
    id: 3,
    icon: <FaLocationArrow />,
    descr: "LOCATION",
    info: "Lagos, Nigeria",
  },
];

interface Link {
  id: number;
  link: string;
  name: string;
}
export const Tab: Link[] = [
  {
    id: 1,
    link: "",
    name: "About",
  },
  {
    id: 2,
    link: "resume",
    name: "Resume",
  },
  {
    id: 3,
    link: "portfolio",
    name: "Portfolio",
  },
  {
    id: 4,
    link: "contact",
    name: "Contact",
  },
];

interface About {
  id: number;
  icon: any;
  header: string;
  info: string;
}

export const Info: About[] = [
  {
    id: 1,
    icon: <FaLaptop size={50} />,
    header: "Web Development",
    info: "High-quality development of sites at the professional level.",
  },
  {
    id: 2,
    icon: <FaPhone size={50} />,
    header: "Mobile Apps",
    info: "Professional development of applications for iOS and Android.",
  },
];

interface skills {
  id: number;
  name: string;
  value: number;
  percentage: string;
}

export const Skill: skills[] = [
  {
    id: 1,
    name: "HTML and CSS",
    value: 100,
    percentage: "100%",
  },
  {
    id: 2,
    name: "JavaScript",
    value: 80,
    percentage: "80%",
  },
  {
    id: 3,
    name: "React and ReduxJs",
    value: 80,
    percentage: "80%",
  },
  {
    id: 4,
    name: "TypeScript",
    value: 80,
    percentage: "80%",
  },
  {
    id: 5,
    name: "TailwindCSS, Styled Component and MUI",
    value: 90,
    percentage: "90%",
  },
];

interface exp {
  id: number;
  head: string;
  from: string;
  to: string;
  info: string;
}

export const Experience: exp[] = [
  {
    id: 1,
    head: "SoftAmplify Technologies, Nigeria— Frontend Developer ",
    from: "2020",
    to: "2021",
    info: "I collaborated with the Lead Engineer in building functional user interface, Debugged and Fixed the JavaScript issues",
  },
  {
    id: 2,
    head: "Fiverr and Upwork,  — Frontend Developer",
    from: "2021",
    to: "Present",
    info: "Converted Figma files into HTML & CSS, Converted Figma and PSD files into React",
  },
  {
    id: 3,
    head: "Bismuth Technologies, Ghanna— Frontend Developer ",
    from: "2022",
    to: "2023",
    info: "Developed functional Client Profile Page and I implemented an interactive programming features: Animation, AOS etc.",
  },
];

interface proj {
  id: number;
  category: string;
  name: string;
  link: string;
  icon: any | JSX.Element;
}

export const portfolio: proj[] = [
  {
    id: 1,
    category: "Web Development",
    name: "Tech citadel",
    link: "https://techcitadel.netlify.app",
    icon: (
      <img
        src={citadel}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
  {
    id: 2,
    category: "Web Development",
    name: "Dentol",
    link: "https://dentol.netlify.app",
    icon: (
      <img
        src={dentol}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
  {
    id: 3,
    category: "Application",
    name: "QRCode Generator",
    link: "https://qrcodegeneratorapps.netlify.app",
    icon: (
      <img
        src={qrcode}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
  {
    id: 4,
    category: "Web Development",
    name: "Crappo-crypto",
    link: "https://crappos-crypto.netlify.app",
    icon: (
      <img
        src={crappo}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
  {
    id: 5,
    category: "Application",
    name: "Fitness Blog",
    link: "https://fitness-blog-app.netlify.app",
    icon: (
      <img
        src={fitness}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
  {
    id: 6,
    category: "Web Development",
    name: "Torehub",
    link: "https://torehub.netlify.app",
    icon: (
      <img
        src={project}
        alt="project"
        className="h-[180px] w-[257px] lg:[270px]"
      />
    ),
  },
];
