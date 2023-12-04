const Tag = (props) => {
  return (
    <div className="md:px-6 px-4 my-1 flex flex-row items-center justify-center md:py-[6px] py-2 text-white border border-white rounded-full">
        <h1 className="md:font-Halenior-semibold font-Halenior-medium ms:text-sm text-xs m-0 p-0">{props.tag}</h1>
    </div>
  )
}

export default Tag