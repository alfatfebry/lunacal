import Gallery from '@/components/GalleryWidget';
import Tabs from '@/components/ProfileTabs';

export default function Home() {
  return (
    <main className='h-screen flex items-start md:items-center justify-center'>
      <div className='w-full md:w-11/12 bg-[#282D31] p-4 md:p-7 rounded-none md:rounded-2xl text-white flex gap-7 xl:gap-14 flex-col-reverse xl:flex-row'>
        {/* Left side (kosong) */}
        <div className='flex-1 bg-[#616161] rounded-2xl border border-[#96BEE7] p-4 text-center'>
          Content
        </div>

        {/* Right side */}
        <div className='flex flex-1 flex-col gap-6'>
          {/* Widget 1: About/Experiences/Recommended */}
          <div className='bg-[#363C43] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] p-4 md:p-6'>
            <Tabs />
          </div>

          {/* Widget 2: Gallery */}
          <div className='bg-[#363C43] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.6)] p-6'>
            <Gallery />
          </div>
        </div>
      </div>
    </main>
  );
}
