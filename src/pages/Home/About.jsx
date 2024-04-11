import React from 'react'
import Laptop from '../../assets/laptop.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="About">
        <div className='max-w-[1240px] ma-auto grid md:grid-cols-2'>
            <img className='w-[520px] mx-auto my-4' src={Laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9b] font-bold'>LET ME UNVEIL MY WORLD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                    Hello, I am Junseok Oh @eDi9root.
                </h1>
                <p className='text-base lg:text-lg font-bold py-4'>
                    I am studying Honours Mathematics and Information Technology at the 
                    <b className='text-[#00dc5c] italic'> University of Waterloo,</b> graduating Dec'2024. <br /><br />
                    I have a keen interest in <b className='text-[#00dc5c] italic'>programming and cybersecurity,</b> continually
                    learning and applying modern technological trends. <br /><br />
                    Now, I am working on <b className='text-[#00dc5c] italic'>CocktailCrafter</b> web development 
                    using <b className='text-[#00dc5c] italic'>Next.js, Tailwindcss, and REST API.</b>
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
