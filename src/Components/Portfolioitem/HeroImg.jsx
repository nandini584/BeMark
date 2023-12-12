const HeroImg = () => {

  return (
    <div className="bg-portfolio1 demo-component bg-no-repeat md:h-[100vh] h-[60vh] bg-cover bg-center mb-10 md:mb-0">
        <div className="flex flex-row"> 
            <h1 className="font-Halenior-medium inline-block md:text-5xl text-2xl relative md:top-[75vh] top-[50vh] text-white md:left-12 left-4">Bemaark</h1>
            <div className="md:px-8 px-4 flex flex-row items-center justify-center relative md:top-[75vh] top-[50vh] md:left-[76vw] left-32 text-white  border border-white rounded-full"><h1 className="md:font-Halenior-semibold font-Halenior-light md:text-sm text-xs m-0 p-0">2022</h1></div>
        </div>
        <div className="md:flex flex-row hidden">
            <h2 className="font-Halenior-medium text-base relative top-[82vh] text-white left-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, alias. <br /> Ea nulla fugiat tempora id quibusdam expedita vel dolore vitae corrupti, similique ipsum ipsa sed nemo est accusantium molestiae quo?</h2>
            <div className="px-8 flex flex-row items-center justify-center relative top-[82vh] left-44  text-white  border border-white rounded-full "><h1 className="font-Halenior-semibold text-sm m-0 p-0">Brand Identity</h1></div>
            <div className="px-8 flex flex-row items-center justify-center relative top-[82vh] left-56 text-white  border border-white rounded-full"><h1 className="font-Halenior-semibold text-sm m-0 p-0">Web Design</h1></div>
        </div>
        <div className="cursor "></div>
    </div>
  )
}

export default HeroImg