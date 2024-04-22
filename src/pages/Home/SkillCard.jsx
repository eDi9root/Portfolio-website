import React from 'react'

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div 
        className={`md:text-2xl text-xl font-semibold relative cursor-pointer transition-all duration-300 ease-[ease] p-10 rounded-[0.65rem] 
        border-[1.5px] border-solid text-center bg-[#2222222d]/10 hover:bg-[#00dc5c28] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none
         ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
    >
        <div className='md:w-16 md:h-16 w-10 h-10 flex items-center justify-center absolute top-[-1rem] left-[-1rem] border-[1.5px] rounded-xl blur-[0.5]  bg-zinc-800 hover:bg-zinc-600'>
            <img className='md:w-[2.4rem] w-[1.5rem] h-auto object-contain' src={ iconUrl } alt={ title } />
        </div>
        <span className='md:text-[1.3rem] text-[0.8rem] flex items-center justify-center font-bold'>{ title }</span>

    </div>
  )
}

export default SkillCard
