import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { MdReadMore } from "react-icons/md";
import Drawer from './Drawer'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;


const ProjectCard = (props) => {
  const [open, setOpen] = useState(false)

  if (open) {
    disablePageScroll()
  } else {
    enablePageScroll()
  }

  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          className="relative h-[25rem] lg:w-[24rem] w-full rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-900"
        >
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 grid text-center text-3xl font-extrabold rounded-xl py-10 bg-[#111112] shadow-lg"
          >
            {props.title}
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="text-lg font-semibold text-zinc-400 mx-6 my-6"
            >
              {props.front}
            </p>
            <div>
                <button 
                    onClick={() => setOpen(true)}
                    className="text-base font-semibold text-zinc-400 mx-6 hover:text-[#00dc5d]"
                    >
                    Read more
                    <div className="text-[200%] flex justify-center"><MdReadMore /></div>
                </button>
                <button className="text-base font-semibold text-zinc-400 mx-6 hover:text-[#00dc5d]">
                    Github
                    <a className="text-[150%] flex justify-center pt-1" target="_blank" href={props.url}>
                        <FiGithub />
                    </a>
                </button>
            </div>   
          </div>
        </motion.div>
        <Drawer open={open} setOpen={setOpen}>
            <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                <h2 className="text-4xl font-bold flex justify-center item-center h-[5rem] py-5 text-neutral-200">
                    { props.title }
                </h2>
                <p>
                    <img className="w-[40rem] h-[20rem] flex justify-center item-center mb-10" src={props.img} alt={props.title} />
                </p>
                <p className="font-bold text-lg">
                    {props.content}
                </p>
            </div>
        </Drawer>
    </>
  );
};

export default ProjectCard;