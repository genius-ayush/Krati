import React from 'react';
import Link from 'next/link';
interface Props {
  imagePath: string;
  heading : string  ; 
  content : string ; 
}

const Card2: React.FC<Props> = ({ imagePath , heading , content}) => {
  
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl h-[500px] pt-9">
      <div
        className="  relative h-60 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src={imagePath}
          alt="card-image" className='object-contain h-full w-full pt-3' />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
         {heading}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {content}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button">
            <Link href={heading}>
          Read More
            </Link>
        </button>
      </div>
    </div>
  );
};

export default Card2; 