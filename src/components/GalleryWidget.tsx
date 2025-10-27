'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import ask from '../../public/ask.png';
import grid from '../../public/grid.png';
import arrowLeft from '../../public/arrow-left.png';
import arrowRight from '../../public/arrow-right.png';
import thumb1 from '../../public/sample1.png';
import thumb2 from '../../public/sample1.png';
import thumb3 from '../../public/sample1.png';
import thumb4 from '../../public/sample1.png';

export default function Gallery() {
  const images = [thumb1, thumb2, thumb3, thumb4];
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // ⛔️ matikan default arrow
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className='bg-[#363C43] rounded-2xl text-white flex flex-col md:flex-row gap-5 md:gap-0'>
      <div className='p-0 md:pr-6 flex flex-row md:flex-col gap-4 shrink-0'>
        <Image
          src={ask}
          alt='Ask Icon'
          width={40}
          height={40}
          className='cursor-pointer hover:opacity-[.7] w-[20] h-[20] md:w-[30] md:h-[30]'
        />
        <Image
          src={grid}
          alt='Grid Icon'
          width={40}
          height={40}
          className='ml-auto md:my-auto cursor-pointer hover:opacity-[.4] w-[20] h-[20] md:w-[30] md:h-[30]'
        />
      </div>

      {/* Right content */}
      <div className='right-side ml-auto w-full'>
        <div className='flex items-center justify-between mb-8 gap-4 flex-wrap '>
          <h2 className='font-semibold tracking-wide bg-[#171C21] px-4 py-2 rounded-lg text-lg hover:bg-[#1f2329] transition-all'>
            Gallery
          </h2>

          <div className='flex items-center gap-4 ml-auto'>
            {/* tombol Add */}
            <button
              className='flex items-center gap-2 px-6 py-3 bg-[#41474E] rounded-full text-white font-semibold 
               shadow-[6px_6px_12px_#1E1E1E,-6px_-6px_12px_#3A3F47] 
               hover:shadow-[inset_4px_4px_8px_#1E1E1E,inset_-4px_-4px_8px_#3A3F47] 
               transition-all duration-300 ease-in-out text-sm'
            >
              <Plus className='w-4 h-4' /> ADD IMAGE
            </button>
          </div>

          <div className='flex items-center gap-4 justify-center w-full md:w-fit'>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className='w-9 h-9 flex items-center justify-center rounded-full bg-[#2E333A]
                         shadow-[4px_4px_8px_#1E1E1E,-4px_-4px_8px_#3A3F47]
                         hover:shadow-[inset_3px_3px_6px_#1E1E1E,inset_-3px_-3px_6px_#3A3F47]
                         transition-all'
            >
              <Image
                src={arrowLeft}
                alt='Ask Icon'
                width={17}
                height={16}
                className='cursor-pointer hover:opacity-[.7]'
              />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className='w-9 h-9 flex items-center justify-center rounded-full bg-[#2E333A]
                         shadow-[4px_4px_8px_#1E1E1E,-4px_-4px_8px_#3A3F47]
                         hover:shadow-[inset_3px_3px_6px_#1E1E1E,inset_-3px_-3px_6px_#3A3F47]
                         transition-all'
            >
              <Image
                src={arrowRight}
                alt='Ask Icon'
                width={17}
                height={16}
                className='cursor-pointer hover:opacity-[.7]'
              />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className='relative max-w-[380px] md:max-w-[580px] xl:max-w-[500px] 2xl:max-w-[680px] mx-auto'>
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <div className='bg-[#171C21] rounded-xl aspect-square overflow-hidden flex items-center justify-center hover:scale-[1.03] transition-transform duration-300'>
                  <Image
                    src={img}
                    alt={`Gallery ${idx}`}
                    className='object-cover w-full h-full'
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
