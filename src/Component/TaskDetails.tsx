import React, { useState } from 'react'
import Modal from './Common/Modal.tsx'
import img1 from '../img/Group 6.png'
import Dropdownn from "./Common/Dropdownn.tsx";
import { Option } from 'antd/es/mentions/index';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import DeleteTaskModal from './DeleteTaskModal.tsx';
import EditTask from './EditTask.tsx';

const options = [
    {
        value: "todo",
        label: "Todo",
    },
    {
        value: "doing",
        label: "Doing",
    },
    {
        value: "done",
        label: "Done",
    },
    {
        value: "review",
        label: "Review",
    },
    {
        value: "closed",
        label: "Closed",
    },
]




function TaskDetails({ showDetails, setShowDetails }: TaskDetailsProps) {

    const [currentStatus, setCurrentStatus] = useState("Doing");
    const [checked, setChecked] = useState(false);
    const [showDeleteTask, setShowDeleteTask] = useState(false);
    const [showEditTask, setShowEditTask] = useState(false);



    const handleShowDeleteTask = () => {
        setShowDeleteTask(!showDeleteTask)
        setShowDetails(false)
    }
    const handleShowEditTask = () => {
        setShowEditTask(!showEditTask)
        setShowDetails(false)
    }

    const items: MenuProps['items'] = [
        {
            label: <div onClick={handleShowEditTask}>Edit Task</div>, 
            key: '0',
        },
        {
            label: <div onClick={handleShowDeleteTask}>Delete Task</div>,
            key: '1',
        },

    ];


    return (
        <>
            <Modal open={showDetails} onClose={() => setShowDetails(false)} className={'w-[500px] dark:bg-[#2B2C37] dark:text-white'}>
                <div className=' p-6 flex flex-col gap-8 '>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-semibold text-[18px] w-[90%] '>Research pricing points of various competitors and trial different business models</h2>
                        <Dropdown menu={{ items }} placement="bottom" trigger={['click']} className='  '>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <img src={img1} alt="" className='h-4  ' />

                                </Space>
                            </a>
                        </Dropdown>

                    </div>
                    <div className='text-[14px] text-[#828FA3] font-normal '>We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.</div>
                    <div className='flex flex-col gap-3'>
                        <span className="text-[14px] text-[#828FA3] font-medium"> Subtasks (2 of 3) </span>
                        <div className={`dark:bg-[#20212C] py-5 rounded  text-[14px] bg-[#E4EBFA]  h-[40px] flex items-center px-3 ${checked && 'line-through'} `} > <input type="checkbox"  name="" id="" defaultChecked={checked} onChange={() => setChecked((val) => !val)} className='bg-[#635FC7] dark:bg-[#2B2C37]'  /> <p className='pl-3 font-medium text-[#828FA3]' >Research competitor pricing and business models</p> </div>
                        <div className={`dark:bg-[#20212C] py-5 rounded  text-[14px] bg-[#E4EBFA]  h-[40px] flex items-center ${checked && 'line-through'}  px-3  `} > <input type="checkbox" name="" id="" defaultChecked={checked} onChange={() => setChecked((val) => !val)} className='bg-[#635FC7] dark:bg-[#2B2C37]' /> <p className='pl-3 font-medium text-[#828FA3]' >Outline a business model that works for our solution</p> </div>
                        <div className={`dark:bg-[#20212C] py-5 rounded  text-[14px] bg-[#E4EBFA]  h-[40px] flex items-center ${checked && 'line-through'}  px-3 `} > <input type="checkbox" name="" id="" defaultChecked={checked} onChange={() => setChecked((val) => !val)} className='bg-[#635FC7] dark:bg-[#2B2C37]' /> <p className='pl-3 font-medium text-[#828FA3]' >Talk to potential customers about our proposed solution and ask for fair price expectancy</p></div>
                    </div>
                    <div className="gap-2 flex flex-col mb-3">
                        <p className="text-[14px] text-[#828FA3] font-medium"> Current Status</p>
                        <Dropdownn
                            value={currentStatus}
                            options={options}
                            onChange={(value) => setCurrentStatus(value.label)}
                        />
                    </div>

                </div>
            </Modal>
            <DeleteTaskModal showDeleteTask={showDeleteTask} setShowDeleteTask={() => setShowDeleteTask(false)} />
            <EditTask showEditTask={showEditTask} setShowEditTask={() => setShowEditTask(false)} />

        </>
    )
}

export default TaskDetails