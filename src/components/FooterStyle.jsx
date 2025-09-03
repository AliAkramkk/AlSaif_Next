import React from 'react';
import Image from 'next/image';

const FooterStyle = () => {
  return (
    <div className='-mb-16 mt-36'>
      <div className="relative bg-gray-100 px-6 md:px-1 w-full  md:rounded-tr-full">
        <div className='flex flex-row items-start relative'>
          {/* Text Section */}
          <div className="w-2/3 z-10">
            <h1 className='mt-6 md:mt-5 text-2xl md:text-6xl font-stretch-50% px-3'>
              Interest in <br />
              <span>Working with Us?</span>
            </h1>
          </div>

          {/* Image Positioned to the Right */}
          <div className="hidden md:block w-1/3  justify-end pr-6 relative">
            <div className="absolute -top-20 right-24  shadow-gray-500 shadow-2xl rounded-t-full bg-amber-200">
              <Image
                src="/assets/proj1.jpg"
                alt="Interior Design"
                width={226}
                height={750}
                className=" h-[300px]  object-contain  rounded-t-full  "
              />
            </div>
          </div>
        </div>

        {/* Paragraph Section */}
        <div className='pt-14'> {/* push down to make room for image overlap */}
          <p className='font-mono px-5'>
            Do you have a passion for creating beautiful and functional spaces? If you are interested <br />
            <span>in working with us please contact us or chat on WhatsApp</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterStyle;
