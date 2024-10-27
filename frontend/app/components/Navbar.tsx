import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
<Link href={"/"}>Logo</Link>
         <Link href={"sign-in"} className='bg-white text-black px-5 py-2 rounded-md '>Sign In</Link>

    </div>
  )
}

export default Navbar
