const Tag = (props) => {
  return (
    <div className="px-6 my-1 flex flex-row items-center justify-center py-[6px] text-white border border-white rounded-full">
        <h1 className="font-Halenior-semibold text-sm m-0 p-0">{props.tag}</h1>
    </div>
  )
}

export default Tag