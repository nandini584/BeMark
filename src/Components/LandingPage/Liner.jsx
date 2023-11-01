import gsap from 'gsap'
const Liner = () => {
  gsap.to(".liner",{
    xPercent: -100 * (".liner".length - 1),
    ease: "none",
    scrollTrigger:{
      trigger:".liner",
      pin:true,
      snap:1/(".liner".length - 1),
      scrub:true,
      end: () => "+=" + document.querySelector(".container").offsetWidth
    },

  })
  return (
    <div className="container"><h1 className="liner text-[200px] font-Halenior-medium text-[#1D0B3A]">A Remarkable Presence</h1></div>
  )
}

export default Liner