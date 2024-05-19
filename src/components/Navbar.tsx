'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu,X } from 'lucide-react'
import clsx from 'clsx'

const Navbar = () => {
  const [isSideMenuOpen,setMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className=' flex p-4 justify-between  md:justify-around mt-2  '>
      <div className=' text-3xl font-bold'  >
        <Link href={'/'}>
        
        Gridly
        </Link>
        </div>
      <div className='hidden md:flex  justify-between  gap-12'>
      <Link className={` link ${pathname === '/' ? 'active text-base' : ' text-[#676767]'} hover:text-white`} href="/">
        Home
      </Link>
      <Link className={`link ${pathname === '/about' ? 'active' : 'text-[#676767]  '}hover:text-white`} href="/about">
        About
      </Link>
      <Link className={`link ${pathname === '/works' ? 'active' : 'text-[#676767]'} hover:text-white`} href="/works">
        Works
      </Link>
      <Link className={`link ${pathname === '/contact' ? 'active' : 'text-[#676767]'} hover:text-white`} href="/contact">
        Contact
      </Link>
      </div>
      <div  className='md:hidden'> <Menu size={46} onClick={() =>  setMenu(true)} /></div>
      <div className=' hidden md:block'> <button className=' text-base py-3 px-8  ease-in-out duration-300 bg-[#323232] hover:bg-white hover:text-black text-center  rounded-2xl'>Let's talk</button></div>

      <div className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
          onClick={() => setMenu(false)}
          >
        <section className='bg-black  text-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-1/2 flex'>
          <div className='flex justify-end'>

          <X onClick={() => setMenu(false)}/>
          </div>
          
          <Link className={` link ${pathname === '/' ? 'active text-base' : ' text-[#676767]'} hover:text-white`} href="/" onClick={() => setMenu(false)}>
        Home
      </Link>
      <Link className={`link ${pathname === '/about' ? 'active' : 'text-[#676767]  '}hover:text-white`} href="/about" onClick={() => setMenu(false)}>
        About
      </Link>
      <Link className={`link ${pathname === '/works' ? 'active' : 'text-[#676767]'} hover:text-white`} href="/works" onClick={() => setMenu(false)}>
        Works
      </Link>
      <Link className={`link ${pathname === '/contact' ? 'active' : 'text-[#676767]'} hover:text-white`} href="/contact" onClick={() => setMenu(false)}>
        Contact
      </Link>
        </section>
      </div>
    </div>
  )
}

export default Navbar
