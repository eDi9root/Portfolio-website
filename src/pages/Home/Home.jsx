import React from 'react'
import Type from './Type'
import About from './About'
import Skills from './Skills'
import Button2 from '../Button2'
import Motion from '../Design/Motion'

const Home = () => {
  return (
    <>
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-[115vh] mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00dc5c94] font-bold p-1'>
                    <Motion name='BASH$ ECHO "HELLO, WORLD!"' />
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    <Motion name="Junseok Oh" />
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
                        <Motion item="Edi9Root, Passionate about" />
                    </p>

                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>
                    <Motion item={<Type />} />
                </p>
                {/* <button className='bg-[#00dc5cb6] w-[150px] rounded-xl font-bold my-6 mt-10 mx-auto py-3 text-black'>
                    About Me   
                </button> */}
                <div>
                    <a href='#About'>
                        <Motion item={<Button2 />} />
                    </a>
                </div>
                

            </div>
        </div>
        <About />
        <Skills />
    </>
  )
}

export default Home
