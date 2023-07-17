
function Navbar() {
  return (
    <div className="absolute top-0  flex w-full p-6  text-center items-center lg:justify-between sm:justify-center ">
    <h1 className="text-white font-primary text-6xl pl-10  ">update4u</h1>
    <div className="text-gray-200 space-x-10 text-[18px] max-sm:hidden sm:hidden lg:block ">
     <a href="" className='text-white hover:text-white '>Notifications</a>
     <a href="" className='text-[#b88b50] hover:text-white'>News</a>
     <a href="" className='text-[#b88b50] hover:text-white'>Notes</a>
     <a href="" className='text-[#b88b50] hover:text-white'>Books</a>
     <a href="" className='text-[#b88b50] hover:text-white'>About us</a>
    </div>
  </div>
  )
}

export default Navbar