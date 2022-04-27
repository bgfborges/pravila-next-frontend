import React from 'react';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

const AccordionLayout = ({ title, children, index, activeIndex, setActiveIndex }) => {
  const handleSetIndex = (index) => {
    if(activeIndex !== index) {
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <div onClick={() => handleSetIndex(index)} className='w-[90vw] lg:w-[60vw]'>
        <div className='flex cursor-pointer w-full border-b border-1 border-black justify-between p-4 bg-blue'>
            <div className='flex cursor-pointer'>
                <div className='text-white font-bold cursor-pointer'>{title}</div>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
                {
                (activeIndex === index) 
                ? <AiFillCaretDown className='w-4 h-4' />
                : <AiFillCaretUp className='w-4 h-4' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl bg-white text-black w-full p-4 pb-8">
              {children}
            </div>
        )}
    </div>
  );
};

export default AccordionLayout;