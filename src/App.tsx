import React, {useState} from 'react';
import './App.css';
import img1 from './img/Group 15.png'
import img2 from './img/Group 6.png'
import { Switch } from 'antd';

function App() {
  const handleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className='App'>
      <div className='container'>
        <div className='nav flex justify-between w-screen h-24 bg-white dark:bg-[#2B2C37] border-b-2 border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500'>
          <div className=' logo flex  w-[15%] p-3 justify-center  items-center border-r-2 border-[#3E3F4E]-500 dark:border-[#3E3F4E] duration-500'>
            <img src={img1} alt='main-' className='img w-6 h-7'/>
            <h1 className='logo-name text-3xl font-bold p-3 dark:text-white' >Kanban</h1>
          </div>
          <div className='header-body flex justify-between p-5 w-[85%] items-center'>
            <h2 className='header-body-h2 text-2xl font-medium dark:text-white'>Platform Launch</h2>
            <div className='header-body-switch flex items-center'>
              <Switch defaultChecked onChange={handleDarkMode} />
            <div className='header-body-text-container flex items-center'>
              <div className='header-body-text rounded-3xl p-3 text-[#FFFFFF] bg-[#635FC7] '>+ Add New Task </div>
              <img src={img2} alt='main-' className='img2 h-4 pl-4'/>
            </div>
          </div>
          </div>
        </div>
        <div className='body bg-[#F4F7FD]'>
          <div>
            <span><img src="" alt="" /> TODO</span>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <span><img src="" alt="" /> IN PROGRESS</span>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <span><img src="" alt="" /> REVIEW</span>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
 
// /* Group 11 */
/* Group 9 */

// position: absolute;
// width: 251px;
// height: 48px;
// left: 24px;
// top: 888px;

