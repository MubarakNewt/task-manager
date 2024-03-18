import React, { Children, useState } from 'react'
import img1 from '../img/Group 15.png'
import img2 from '../img/Group 6.png'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import { Button } from 'antd';
import MobileNavDropdown from './MobileNavDropdown.tsx';
import NewTaskModal from './NewTaskModal.tsx';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import DeleteBoardModal from './DeleteBoardModal.tsx';
import EditBoard from './EditBoard.tsx';







function Navbar({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
  const [showModal, setShowModal] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false)
  const [showDeleteBoard, setShowDeleteBoard] = useState(false)
  const [showEditBoard, setShowEditBoard] = useState(false)



  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleNewTask = () => {
    setShowNewTask(!showNewTask)
  }

  const handleDeleteBoard = () => {
    setShowDeleteBoard(!showDeleteBoard)
  }

  const handleEditBoard = () => {
    setShowEditBoard(!showEditBoard)
  }

  const items: MenuProps['items'] = [
    {
      label: <div onClick={handleEditBoard}>Edit Board</div>,
      key: '0',
    },
    {
      label: <div onClick={handleDeleteBoard}>Delete Board</div>,
      key: '1',
    },

  ];

  return (
    <>
      <div className={` ${open ? "left-0 sm:left-[200px] md:left-[250px]" : "left-0"} flex  sm:justify-between  h-24 bg-white dark:bg-[#2B2C37] border-b-2 border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500 z-10 fixed  right-0`}>

        {!open && <div className='  logo flex  sm:w-[200px] p-4 justify-center  items-center sm:border-r-2 border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500'>
          <img src={img1} alt='main-' className='img w-6 h-7 ' />
          <h1 className='logo-name hidden sm:inline text-3xl font-bold p-3 dark:text-white' >Kanban</h1>
        </div>}
        <div className={`header-body flex justify-between sm:p-5 ${!open ? 'w-[85%]' : 'w-full'} items-center`}>
          <div className='flex items-center w-[300px]'>
            <h2 className='header-body-h2 flex items-center text-2xl font-medium dark:text-white mr-2'>Platform Launch </h2>
            <p className='sm:hidden inline' onClick={handleClick}><FaChevronDown color="#635FC7" className={`duration-500 ${showModal ? ' rotate-[-180deg]' : ''} text-[10px] `} /></p>
          </div>
          <div className='header-body-switch flex items-center'>
            <div className='header-body-text-container flex justify-end items-center'>
              <div onClick={handleNewTask} className='header-body-text flex rounded-3xl sm:p-3 px-5 py-1 text-[#FFFFFF] sm:gap-1 bg-[#635FC7] cursor-pointer'><span onClick={handleNewTask}>+</span>  <p className=' hidden sm:inline'>Add New Task </p> </div>
              <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']} className='  '>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <SlOptionsVertical  color='#828FA3'/>

                  </Space>
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <MobileNavDropdown showModal={showModal} setShowModal={setShowModal} />
      <MobileNavDropdown showModal={showModal} setShowModal={() => setShowModal(false)} />
      <NewTaskModal showNewTask={showNewTask} setShowNewTask={() => setShowNewTask(false)} />
      <DeleteBoardModal showDeleteBoard={showDeleteBoard} setShowDeleteBoard={() => setShowDeleteBoard(false)} />
      <EditBoard showEditBoard={showEditBoard} setShowEditBoard={() => setShowEditBoard(false)} />
    </>
  );
}

export default Navbar
// flex flex-nowrap  justify-between w-full h-24 bg-white dark:bg-[#2B2C37] border-b-2 border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500 z-10 absolute right-0