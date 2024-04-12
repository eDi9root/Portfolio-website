import { Document, Page } from 'react-pdf';
import pdf1 from '../../assets/Resume/Resume_Junseok_Oh-1.pdf';
import pdf2 from '../../assets/Resume/Resume_Junseok_Oh-2.pdf';

function PdfLoader() {

  return (
    <div className='max-w-[1200px] mx-auto grid lg:flex items-center justify-center gap-6 gap-y-8 px-10 lg:px-0'>
      <div>
        <Document file={pdf1}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
        <p>
          Page 1 of 2
        </p>
      </div>
      <div>
        <Document file={pdf2}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
        <p>
          Page 2 of 2
        </p>
      </div>
    </div>
  );
}

export default PdfLoader;