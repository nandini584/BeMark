import Stock1 from "../../Images/Stock1.svg"
import Stock2 from "../../Images/Stock2.svg"
import Stock3 from "../../Images/Stock3.svg"
const Mesh = () => {
  return (
    <div className="bg-hero h-[130vh] text-white font-semibold flex flex-col items-center justify-center px-[60px]">
        <h1 className="text-8xl">Bemaark was born from the passion of young <img src={Stock1} alt="Young" className="inline w-80"/> enthusiasts eager to create something exceptional, <img src={Stock2} alt="Creative" className="inline w-80" /> fostering <img src={Stock3} alt="unique" className="inline w-80"/> a unique, empathetic, and collaborative workspace.
</h1>
    </div>
  )
}

export default Mesh