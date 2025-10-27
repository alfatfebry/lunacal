'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ask from '../../public/ask.png';
import grid from '../../public/grid.png';

const tabs = ['About Me', 'Experiences', 'Recommended'];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('About Me');

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

      <div className='right-side ml-auto'>
        {/* Tab buttons */}
        <div className='relative flex gap-2 md:gap-4 mb-6 bg-[#171C21] rounded-2xl p-2 flex-col md:flex-row'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 px-2 md:px-4 py-2 rounded-lg font-medium text-base md:text-lg transition-colors duration-200 z-0 hover:bg-[#16171A] ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {activeTab === tab && (
                <motion.span
                  layoutId='activeTab'
                  className='absolute inset-0 bg-[#28292F] rounded-lg shadow-md z-[-1]'
                  transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className='text-[#969696] text-base md:text-xl overflow-y-auto max-h-52 custom-scroll pr-4'>
          {activeTab === 'About Me' && (
            <>
              <p>
                Hello! I&apos;m Dave, your sales rep here from Salesforce.
                I&apos;ve been working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM.
              </p>
            </>
          )}
          {activeTab === 'Experiences' && (
            <>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
              <p>
                Hello! I&apos;m Dave, your sales rep here from Salesforce.
                I&apos;ve been working at this awesome company for 3 years now.
              </p>
            </>
          )}
          {activeTab === 'Recommended' && (
            <>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
              <p>
                Hello! I&apos;m Dave, your sales rep here from Salesforce.
                I&apos;ve been working at this awesome company for 3 years now.
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella. Both of them are just starting
                school, so my calender is usually blocked between 9-10 AM. This
                is a...
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
