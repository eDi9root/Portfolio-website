import React from 'react'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <div>
        <div className='max-w-[1200px] h-[40vh] pt-[5rem] mx-auto text-center flex flex-col justify-center text-zinc-200'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 hover:text-[#00dc5d]'>
              Contact
            </h1>
        </div>
        <div className="px-4 py-12">
            <div className="mx-auto max-w-7xl">
            <ContactCard />
            </div>
        </div>
    </div>
  )
}

export default Contact
