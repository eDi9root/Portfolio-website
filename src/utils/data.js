import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaNodeJs,
    FaPython,
    FaAws,
    FaGitAlt,
    FaLinux,
    FaLinkedin,
    FaInstagram,
    FaGithub,
} from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io";
import { 
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiJquery,
    SiMysql,
    SiPostgresql,
    SiAssemblyscript,
    SiWireshark,
 } from "react-icons/si";
 import { TbBrandCpp, TbBrandVscode } from "react-icons/tb";
 import { MdOutlineSecurity, MdCrisisAlert, MdEmail } from "react-icons/md";
 import { ImBlog } from "react-icons/im";

export const SKILLS = [
    {
        title: "Frontend",
        icon: "/src/assets/frontend.png",
        skills: [
            { skill: "HTML5", Img: FaHtml5, percent: "70%" },
            { skill: "CSS3", Img: FaCss3, percent: "80%" },
            { skill: "JavaScript", Img: IoLogoJavascript, percent: "85%" },
            { skill: "React.js", Img: FaReact, percent: "80%" },
            { skill: "Tailwind", Img: SiTailwindcss, percent: "70%" },
        ],
    },
        {
        title: "Backend",
        icon: "/src/assets/backend.png",
        skills: [
            { skill: "Next.js", Img: SiNextdotjs, percent: "60%"  },
            { skill: "Node.js", Img: FaNodeJs, percent: "65%"  },
            { skill: "Express.js", Img: SiExpress, percent: "65%"  },
            { skill: "jQuery", Img: SiJquery, percent: "70%"  },
            { skill: "MySQL", Img: SiMysql, percent: "90%"  },
            { skill: "PostGreSQL", Img: SiPostgresql, percent: "85%"  },
        ],
    },
        {
        title: "Tools",
        icon: "/src/assets/tools.png",
        skills: [
            { skill: "C++", Img: TbBrandCpp, percent: "90%" },
            { skill: "Python", Img: FaPython, percent: "85%" },
            { skill: "Assembly", Img: SiAssemblyscript, percent: "70%" },
            { skill: "AWS", Img: FaAws, percent: "70%" },
            { skill: "Git/Github", Img: FaGitAlt, percent: "90%" },
            { skill: "VS Code", Img: TbBrandVscode, percent: "90%" },
            { skill: "Linux", Img: FaLinux, percent: "80%" },
        ],
    },
        {
        title: "Security",
        icon: "/src/assets/cyber.png",
        skills: [
            { skill: "SIEM", Img: MdOutlineSecurity, percent: "70%" },
            { skill: "IDS", Img: MdCrisisAlert, percent: "70%" },
            { skill: "Packet", Img: SiWireshark, percent: "80%" },
        ],
    },
];

export const SOCIALS = [
  {
    id: "0",
    title: "Likedin",
    img: FaLinkedin,
    url: "https://www.linkedin.com/in/junseok-oh/",
  },
  {
    id: "1",
    title: "Instagram",
    img: FaInstagram,
    url: "https://www.instagram.com/junseok0h/",
  },
  {
    id: "2",
    title: "Github",
    img: FaGithub,
    url: "https://github.com/eDi9root",
  },
  {
    id: "3",
    title: "Blogs",
    img: ImBlog,
    url: "#",
  },
];

export const PROJECTS = [
    {
        title: "ANTQUANT",
        content: "Designed and built the development environment by applying the securities firm APIs. Based on the concept of quantitative investing, I created my own strategy and applied it by extracted data through web crawling and APIs, and managed it using an AWS database."

    },
]
