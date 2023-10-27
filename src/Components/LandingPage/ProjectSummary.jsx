const ProjectSummary = () => {
  return (
    <div className="bg-[#1D0B3A] flex flex-row items-center justify-between px-[40px] py-[90px] mt-20">
        <div className="flex flex-col items-start justify-between">
            <h1 className="text-[#C2FF00] text-8xl font-Halenior-medium">Our projects</h1>
            <div className="flex flex-row mt-28">
                <div className="flex flex-row">
                   <h1 className="text-[#C2FF00] text-[110px] font-Halenior-medium">48</h1>
                   <h1 className="text-[#C2FF00] text-[20px] font-Halenior-bold mt-[105px] mr-20">completed projects</h1>
                </div>
                <div className="flex flex-row">
                   <h1 className="text-[#C2FF00] text-[110px] font-Halenior-medium">25</h1>
                   <h1 className="text-[#C2FF00] text-[20px] font-Halenior-bold mt-[105px]">awards & features</h1>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-[#C2FF00] font-Halenior-medium tracking-tight leading-tight mt-40 text-[34px] w-[35vw]">Bemaark's impressive portfolio showcases numerous successful projects. We've left no doubt—we've got the receipts!</h1>
        </div>
    </div>
  )
}

export default ProjectSummary