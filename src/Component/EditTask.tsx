import React, { useState } from "react"
import Modal from "./Common/Modal.tsx"
import { IoClose } from "react-icons/io5";
import img1 from '../img/Group 18.png'
import Dropdown from "./Common/Dropdownn.tsx";
import DropdownButton from "antd/es/dropdown/dropdown-button";


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

function EditTask({ showEditTask, setShowEditTask }: EditTaskProps) {
    const [currentStatus, setCurrentStatus] = useState("Doing");



    return (

        <Modal open={showEditTask} onClose={() => setShowEditTask(false)} className={'w-[80%]'}>
            <div className="flex flex-col  p-5">
                <h2 className="mb-5 text-xl font-semibold ">Edit Task</h2>
                <div className="gap-2 flex flex-col mb-3">
                    <p className="text-[14px] font-medium text-[#828FA3] ">Title</p>
                    <div  className=" flex items-center  px-3 font-medium rounded outline-0 border w-full h-[40px] text-[14px] text-[#3E3F4E] " > Add authentication endpoints</div>
                </div>
                <div className="gap-2 flex flex-col mb-3">
                    <p className="text-[14px] font-medium text-[#828FA3] ">Description</p>
                    <textarea className="px-3 font-medium rounded outline-0 border w-full h-[120px] text-[14px] text-[#3E3F4E] " placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." />
                </div>
                <div className="gap-2 flex flex-col mb-3">
                    <p className="text-[14px] font-medium text-[#828FA3] ">Subtasks</p>
                    <div className=" flex items-center "><div className=" flex items-center  px-3 font-medium rounded text-[14px] outline-0 border  w-[90%] h-[40px] text-[#3E3F4E]"> Define user model</div> <IoClose className="pl-2 text-[35px] text-[#828FA3] "/></div> 
                    <div className="flex items-center"> <div className=" flex items-center  px-3 font-medium rounded text-[14px] outline-0 border  w-[90%] h-[40px] text-[#3E3F4E]" > Add auth endpoints</div> <IoClose className="pl-2 text-[35px] text-[#828FA3] "/></div> 
                    <button className="text-[#635FC7] py-2 font-medium rounded-[40px] text-[14px] bg-[#E4EBFA] "> + Add New Subtask</button>
                </div>
                <div className="gap-2 flex flex-col mb-3">
                    <p className="text-[14px] text-[#828FA3] font-medium">Status</p>
                    <Dropdown
                        value={currentStatus}
                        options={options}
                        onChange={(value) => setCurrentStatus(value.label)}
                    />
                </div>
                <button className="text-[#E4EBFA] py-2 font-medium rounded-[40px] text-[14px] bg-[#635FC7] mt-4" > Save Changes</button>
            </div>

        </Modal>
    )
}

export default EditTask
