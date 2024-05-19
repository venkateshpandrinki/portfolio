import React from 'react'

const BentoGrid = () => {
  return (
    <div className=' w-4/5 '>

    <div className=' gap-4   m-4 grid sm:grid-cols-12 sm:grid-rows-12  text-center'>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-6 sm:row-span-4 '>1</div>
      <div className=' min-h-10      rounded-3xl bg-teal-800 sm:col-span-6 sm:row-span-1 '>2</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-3 sm:row-span-3'>3</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-3 sm:row-span-3'>4</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-3 sm:row-span-4'>5</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-6 sm:row-span-4'>6</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-3 sm:row-span-4'>7</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-6 sm:row-span-4'>8</div>
      <div className=' min-h-[100px] rounded-3xl bg-teal-800 sm:col-span-6 sm:row-span-4'>9</div>

      
          </div>
    </div>
  )
}

export default BentoGrid
