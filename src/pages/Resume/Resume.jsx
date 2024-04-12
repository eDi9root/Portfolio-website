import React from 'react'
import Button from '../Button'
import { pdfjs } from 'react-pdf';
import PdfLoader from './PdfLoader';
import pdf from '../../assets/Resume/Resume_Junseok_Oh.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const Resume = () => {
   return (
    <div className='text-zinc-200'>
        <div className='max-w-[1200px] h-[40vh] pt-[5rem] mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 hover:text-[#00dc5d]'>
              Résumé
            </h1>
        </div>
        <div className='flex justify-center h-[3rem] mb-10'>
            <Button href={pdf} target="_blank">
                <div>Download CV</div>
            </Button>
        </div>
        <div>
            <PdfLoader />
        </div>
        
    </div>
  )
}

export default Resume
