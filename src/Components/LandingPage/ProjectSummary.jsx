import Mesh from "../../Images/MeshProject.svg"
const ProjectSummary = () => {
  return (
    <div className="bg-project flex flex-row items-center justify-between px-[40px] py-[90px]">
        <div className="flex flex-col items-start justify-between">
            <h1 className="text-[#7B36FF] text-8xl font-Halenior-light">Our projects</h1>
            <div className="flex flex-row mt-28">
                <div className="flex flex-row">
                   <h1 className="text-[#7B36FF] text-[110px] font-Halenior-regular">48</h1>
                   <h1 className="text-[#7B36FF] text-[20px] font-Halenior-bold mt-[105px] mr-20">completed projects</h1>
                </div>
                <div className="flex flex-row">
                   <h1 className="text-[#7B36FF] text-[110px] font-Halenior-regular">25</h1>
                   <h1 className="text-[#7B36FF] text-[20px] font-Halenior-bold mt-[105px]">awards & features</h1>
                </div>
            </div>
        </div>
        <div>
            <h1 className="text-[#7B36FF] font-Halenior-regular tracking-tight leading-tight mt-40 text-[34px] w-[35vw]">Bemaark's impressive portfolio showcases numerous successful projects. We've left no doubt—we've got the receipts!</h1>
        </div>
    </div>
  )
}

export default ProjectSummary