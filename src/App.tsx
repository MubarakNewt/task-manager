import React, { useState } from 'react';
import './App.css';
import img3 from './img/Oval.png'
import img4 from './img/Oval2.png'
import img5 from './img/Oval3.png'
import img6 from './img/Group 3.png'
import { Switch } from 'antd';
import Sidebar from './Component/Sidebar.tsx';
import Navbar from './Component/Navbar.tsx';
import TaskDetails from './Component/TaskDetails.tsx';
import NewBoard from './Component/NewBoard.tsx';


function App() {
  const [open, setOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showNewBoard, setShowNewBoard] = useState(false)

  const handleShowDetails = ( ) => {
    setShowDetails(!showDetails)
  }
  const handleShowNewBoard = ( ) => {
    setShowNewBoard(!showNewBoard)
  }

  return (
    <div className='App flex h-screen bg-[#F4F7FD] dark:bg-[#20212C]'>
      <TaskDetails showDetails={showDetails} setShowDetails={() => setShowDetails(false)}/>
      <NewBoard showNewBoard={showNewBoard} setShowNewBoard={() => setShowNewBoard(false)}/>

      <div>
        {open ? <Sidebar open={open} setOpen={setOpen} /> : <div></div>}
        <img onClick={() => setOpen(!open)} src={img6} alt="" className={` ${open ? 'hidden' : 'sm:inline'} hidden   absolute w-[56px] h-[48px] left-0 bottom-0 z-50 cursor-pointer`} />

      </div>
      <div className='container w-full  flex flex-col '>
        <Navbar open={open} setOpen={setOpen}  />
        <div className={`body bg-[#F4F7FD] dark:bg-[#20212C]  flex  gap-5 px-4 py-4 overflow-auto   w-screen  h-full  mt-[95px] ${open ? 'ml-[250px]' : ''} relative  duration-500`}>
          {/* <div className='columns w-full  '> */}
            <div className=' columns-each flex flex-col flex-nowrap w-[280px] flex-shrink-0'>
              <div className=' mb-3 flex flex-nowrap items-center text-[13px] font-medium text-[#828FA3]'><img src="" alt="" /> <img src={img3} alt="dot" className=' h-3 pr-2  ' /> TODO (4)</div>
              <div onClick={handleShowDetails} className=' cursor-pointer details mb-[20px]  w-70 h-30 bg-white px-2 py-3 font-medium rounded-lg shadow-md text-[#000112] dark:text-white text-sm dark:bg-[#2B2C37] duration-500'> Build UI for onboarding flow
                <div className=' text-[13px] font-medium text-[#828FA3]'>0 of 3 subtask</div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='  columns-each flex-nowrap w-[280px] flex-shrink-0'>
              <div className=' mb-3 flex items-center text-[13px] font-medium text-[#828FA3]'><img src={img4} alt="dot" className=' h-3 pr-2' /> DOING (6)</div>
              <div className='details  w-70 h-30 bg-white px-2 py-3 font-medium rounded-lg shadow-md text-[#000112] dark:text-white text-sm dark:bg-[#2B2C37] duration-500'> Design settings and search pages
                <div className=' text-[13px] font-medium text-[#828FA3]'>1 of 3 subtask</div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='  columns-each flex-nowrap w-[280px] flex-shrink-0'>
              <div className=' mb-3 flex items-center text-[13px] font-medium text-[#828FA3]'><img src={img5} alt="dot" className=' h-3 pr-2' /> DONE (7)</div>
              <div className='details  w-70 h-30 bg-white px-2 py-3 font-medium rounded-lg shadow-md text-[#000112] dark:text-white text-sm dark:bg-[#2B2C37] duration-500'> Conduct 5 wireframe tests
                <div className=' text-[13px] font-medium text-[#828FA3]'>1 of 1 subtask</div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='  columns-each flex-nowrap w-[280px] flex-shrink-0 mt-8 h-[34rem] flex place-items-center justify-center bg-[#E9EFFA] dark:bg-[#0001122f] rounded-lg'>
              <div onClick={handleShowNewBoard} className=' cursor-pointer text-[25px] font-bold text-[#828FA3]'>
                + New Column
              </div>
            </div>
          {/* </div> */}

        </div>
      </div>


    </div>
  );
}

export default App;

// /* Group 11 */

