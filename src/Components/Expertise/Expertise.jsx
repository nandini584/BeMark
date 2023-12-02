import gsap from 'gsap'
import { useEffect} from 'react';
const Expertise = () => {

    useEffect(() => {
        const t1 = gsap.timeline({ defaults: { ease: 'SlowMo.easeOut' } });
        t1.to('.our-text', {
          y: '0%',
          duration: 1.5,
          stagger: 0,
        });
      }, []);
    return (
      <div className="bg-[white] mt-12 flex md:flex-row flex-col md:items-start justify-between md:px-[40px] px-6">
          <div className="flex flex-col md:items-start justify-between animate">
              <h1 className="text-[#1D0B3A] md:text-8xl text-3xl font-Halenior-medium mt-8 md:mt-0 main-text"><span className='our-text'>Expertise</span></h1>
          </div>
          <div className='mt-48'>
              <h1 className="text-[#1D0B3A] font-Halenior-medium tracking-tight leading-[1] lg:text-[40px] text-base lg:w-[40vw] main-text"><span className='our-text leading-[1.1]'>Explore our portfolio—a testament</span><span className='our-text leading-[1.1]'> to our commitment to holistic </span><span className='our-text leading-[1.1]'>design, brand resonance, and </span><span className='our-text leading-[1.16]'>everlasting impressions.</span></h1>
          </div>
      </div>
    )
  }
  
  export default Expertise