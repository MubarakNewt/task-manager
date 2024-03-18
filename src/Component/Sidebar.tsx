import React from 'react'
import img1 from '../img/Group 15.png'
import img3 from '../img/Combined Shape.png'
import img4 from '../img/Combined Shape2.png'
import img5 from '../img/eye-slash.1.png'


import { TbLayoutBoardSplit } from "react-icons/tb";
import { Switch } from 'antd'


function Sidebar({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {

    const handleDarkMode = () => {
        document.documentElement.classList.toggle('dark')
      }

    return (
        <div className={`   flex flex-col justify-between w-[250px] h-screen fixed z-50  bg-white dark:bg-[#2B2C37] border-r-2 border-[#3E3F4E]-500 dark:border-solid dark:border-[#3E3F4E]  duration-500`}>
            <div className=' flex flex-col '>
                <div className=' py-3 px-4 logo flex w-[200px]  justify-start  items-center  border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500'>
                    <img src={img1} alt='main-' className='img w-6 h-7' />
                    <h1 className='logo-name text-3xl font-bold p-3 dark:text-white' >Kanban</h1>
                </div>
                <div className=' mt-4 flex flex-col  '>
                    <div className=' py-1 px-4 text-[13px] font-medium text-[#828FA3] mb-5'> ALL BOARDS (3)</div>
                    <div className='flex flex-col w-[85%]'>
                        <div className=' py-3 px-4 flex items-center h-[48px] bg-[#635FC7]  cursor-pointer rounded-r-full '> <TbLayoutBoardSplit color='white'/> <div className=' text-white  pl-3 '>Platform Launch</div> </div>
                        <div className=' py-3 px-4 flex items-center h-[48px]'>  <TbLayoutBoardSplit color='#828FA3'/> <div  className=' text-[#828FA3] pl-3'>Marketing Plan</div> </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col py-3 px-4 mb-8'>
                <div className=' flex justify-between items-center dark:bg-[#20212C] duration-500 mb-6 bg-[#F4F7FD] h-[48px] px-10 py-5 cursor-pointer rounded-md'>
                    <img src={img3} alt="" className=' h-[15px]' />
                    <Switch className='bg-[#635FC7]' onClick={handleDarkMode}/>
                    <img src={img4} alt='' className=' h-[15px]'/>
                </div>
                <div onClick={() => setOpen(false)} className='flex items-center text-[15px] font-medium cursor-pointer text-[#828FA3]'> <img src={img5} alt="" className='h-[15px] mr-5'/> Hide Sidebar</div>
            </div>

        </div>
    )
}

export default Sidebar