import React from 'react'

const FirstHalf = () => {
  return (
    <div className=' h-80 grid sm:grid-cols-12 sm:grid-rows-4  text-center  gap-2'>
      <div className='md:col-span-6 sm:col-span-12 md:row-span-4 bg-[#333333]  rounded-3xl'> 1</div>
      <div className='md:col-span-6 sm:col-span-12  bg-[#333333]  h-12 rounded-3xl'>2</div>
      <div className='md:col-span-3 sm:col-span-6  bg-[#333333]  rounded-3xl'>3</div>
      <div className='md:col-span-3 sm:col-span-6  bg-[#333333] rounded-3xl'>4</div>    
    </div>
  )
}

export default FirstHalf
