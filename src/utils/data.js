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
 import { frontend } from "../assets/frontend.png"

export const SKILLS = [
    {
        title: "Frontend",
        icon: {frontend},
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
        icon: "../assets/backend.png",
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
        icon: "../assets/tools.png",
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
        icon: "../assets/cyber.png",
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
        title: "CocktailCrafter",
        front: "Designed Cocktail crafter to find cocktails based on ingredients you have",
        content: "Designed Cocktail crafter based on CocktailDb API, this is v1.0 prototype. Thus, only one ingredient can be entered. v2.0 will be implemented soon with some features that analyze the image you take to find cocktails can make",
        url: "https://github.com/eDi9root/CocktailCrafter",
        img: "../assets/projects/cocktail.png"
    },
    {
        title: "Blogs",
        front: "Designed personal blogs, you can visit and enjoy.",
        content: "Built with Javascript, Next.js, NPM, VsCode, TailwindCss",
        url: "#",
        img: "../assets/projects/blogs.jpg"
    },
    {
        title: "Google_Cybersecurity",
        front: "Google Cybersecurity certificate, included a simple portfolio files in Github",
        content: "With basic knowledge of cybersecurity, I analyzed some tools such as packet sniffer and wireshark, and created portfolio. This is a practice step to doing the actual work.",
        url: "https://github.com/eDi9root/google_cybersecurity",
        img: "../assets/projects/p3.jpg"
    },
    {
        title: "ANTQUANT",
        front: "Designed and built the development environment by applying the securities firm APIs.",
        content: "Designed and built the development environment by applying the securities firm APIs. Based on the concept of quantitative investing, I created my own strategy and applied it by extracted data through web crawling and APIs, and managed it using an AWS database.",
        url: "https://github.com/eDi9root/SystemTrading",
        img: "../assets/projects/p1.jpg"
    },
    {
        title: "FTZ_Writeup",
        front: "Built my own environments and analyze the principles of system hacking step by step based on hackerschool ftz",
        content: "Using hackerschool ftz, I analyze the principles of system hacking step by step. At each stage, I identify and analyze problems, then execute attacks. I explore various methods and principles such as memory manipulation, backdoors, buffer overflows, and conduct analysis through reverse engineering.",
        url: "https://github.com/eDi9root/FTZ-Writeup",
        img: "../assets/projects/p2.jpg"
    },
    {
        title: "Chess_game",
        front: "Designed a chess engine using C++ programming language and algorithms",
        content: "Designed a chess engine using c++ programming language and algorithms. Also, adopted some design patterns such as observer, decorator, factory, and template. Chess v2.0 is currently being built.",
        url: "https://github.com/eDi9root/CS246_CHESS",
        img: "../assets/projects/p4.jpg"
    },
]
