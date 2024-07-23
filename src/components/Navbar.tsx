"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


interface Itemtype  {
item:string , slug:string , img:string
}


const Navbar = () => {

//framer motion state 
const [isOpen, setIsOpen] = useState(false)

const NavItem:Array<Itemtype> = [
    {
        item:"Home",
        slug:"/",
         img: "homeicon.svg"
    },
    {
        item:"Expolre",
        slug:"/",
        img: "exploreicon.svg"
    },
    {
        item:"People",
        slug:"/",
        img: "peopleicon.svg"
    },
    {
        item:"Add-Post",
        slug:"/",
       img: "addpost.svg"
    },
    {
        item:"Saved",
        slug:"/",
        img: "saveicon.svg"
    },
    
]


  return (


  
      
      <div className='lg:w-3/12  lg:h-screen text-gray-100 dark:text-gray-900  bg-gray-900 dark:bg-gray-100 fixed lg:top-0 lg:left-0 lg:pl-8 bottom-0 w-full h-28 '>

{/* heading */}
<Link href={"/"} className='w-full lg:flex mt-8  items-center hidden'>
    <Image src="/Mainicon.jpeg" alt='logo'width={44} height={44} className='rounded-full' />
    <h1 className='text-3xl font-bold  hidden md:block ml-4'>LinkUp</h1>
</Link>


{/* user icon */}
<Link href={"/"} className='w-full lg:flex mt-12  items-center flex-wrap'>
<Image src="userlogo.svg" alt='logo' width={32} height={32} className='absolute top-12 right-1 md:absolute md:top-12 md:right-1 lg:static'/>
<div className='flex flex-col ml-4'>
<h1 className='text-2xl font-semibold  hidden   lg:block '>UserName</h1>
<span className=' hidden text-lg   lg:block  '>@userName</span>
</div>
</Link>


{/* list of navbar */}

<ul className='flex lg:flex-wrap w-11/12 mt-12 lg:min-h-20 justify-evenly lg:gap-9 '>
{
    NavItem && NavItem.map((item:Itemtype ,i)=>{
        
    return    <Link href={item.slug} key={i}
         className={`text-xl w-2/12 font-semibold lg:w-full flex   items-center ${i==4 && "hidden"}`}>
  
  <Image src={item.img} alt='logo'  width={28} height={28} />
  <h1 className='lg:text-2xl hidden lg:block text-xl font-bold lg:ml-4  '>{item.item}</h1> 
</Link>

    })
}
</ul>


<Link href={"/"} className='w-full lg:flex mt-8 hidden  items-center absolute bottom-8'>
    <Image src="logouticon.svg" alt='' width={33} height={33}/>
    <h1 className='text-xl font-bold text-gray-100 hidden md:block lg:ml-4 '>LogOut</h1>
</Link>
    </div>


    
  )
}

export default Navbar