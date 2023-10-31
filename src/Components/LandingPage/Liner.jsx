import HorizontalScroll from 'react-scroll-horizontal';

const HorizontalScrollOnScroll = () => {
  return (
    <div className="w-[100vw] h-[30vh]">
      <HorizontalScroll reverseScroll={true}>
          <div className=' flex flex-col item-center justify-center'>
            <h1 className='text-[200px] font-Halenior-medium text-[#1D0B3A]'>A </h1>
          </div>
          <div className=' flex flex-col item-center justify-center'>
          <h1 className='text-[200px] font-Halenior-medium text-[#1D0B3A]'>Remarkable </h1>
          </div>
          <div className='flex flex-col item-center justify-center'>
          <h1 className='text-[200px] font-Halenior-medium text-[#1D0B3A]'>Presence</h1>
          </div>
      </HorizontalScroll>
    </div>
  );
};

export default HorizontalScrollOnScroll;
