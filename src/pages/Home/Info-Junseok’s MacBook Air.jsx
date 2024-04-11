import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

const Info = ({ heading, skills }) => {

    const [hoveredPercent, setHoveredPercent] = useState(null);

    const handleHover = (percent) => {
        setHoveredPercent(percent);
    }

  return (
    <div className='md:min-h-[22rem] bg-[#2222222d]/30 rounded-[0.65rem] border-[1.5px] border-solid'>
        <h6 className='text-[#00dc5c94] flex justify-between text-[1.2rem] font-bold bg-clip-text px-8 py-[0.8rem] border-b-[1.5px] border-b-[grey] border-solid transition-all'>
          <div>{ heading }</div>
          <div>
            <AnimatePresence mode="popLayout">
                <motion.span
                  key={hoveredPercent}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ ease: "circOut", duration: 0.3 }}
                
                >
                  { hoveredPercent }
                </motion.span>
              </AnimatePresence>
            </div>
        </h6>
        <div className='md:w-5/6 mt-10 mx-10 w-2/3 h-3 overflow-hidden my-4 rounded-lg bg-zinc-700'>
          <div className='w-[0%] h-3 bg-gradient-to-r from-[#00dc5c98] to-[#00dc5c46] rounded-lg transition-all'
            style={{width: hoveredPercent}} 
          />
        </div>

      <div className='p-8 mt-4 flex flex-wrap'>
        { skills.map((Item,index) => (
            <React.Fragment key={`skill_${index}`}>
                <div className="flex items-center justify-center mt-1 m-2 md:w-[6.4rem] w-[1rem] md:h-[6.35rem] h-[1rem] md:text-4xl text-2xl relative cursor-pointer transition-all duration-[0.3s] ease-[ease] p-8 rounded-[0.65rem] 
                                            border-[1.5px] border-solid text-center bg-[#111112] hover:bg-[#00dc5c28] hover:text-[0rem] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                        onMouseEnter={() => handleHover(Item.percent)}
                        onMouseLeave={() => handleHover(null)}>

                    <p className="absolute inset-0.5 md:text-[1rem] md:font-bold text-[0.8rem] text-center mt-6">
                        <div className='absolute font-bold inset-0 opacity-0 transition-opacity hover:opacity-100 duration-300'>
                            { Item.skill }
                        </div>
                    </p>
                    {Item.Img && typeof Item.Img === 'function' && (
                        <p>
                            {< Item.Img />}
                        </p>
                    )}
                </div>

            </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Info
