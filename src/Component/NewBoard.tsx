import React from 'react'
import Modal from './Common/Modal.tsx'
import { IoClose } from "react-icons/io5";


const NewBoard = ({ showNewBoard, setShowNewBoard }: NewBoardProps) => {
    return (

        <Modal open={showNewBoard} onClose={() => setShowNewBoard(false)} className={'w-[80%]'}>
            <div className="flex flex-col gap-6 p-5">
                <h2 className="mb-5 text-xl font-semibold "> Add New Board</h2>
                <div className="gap-2 flex flex-col ">
                    <p className="text-[14px] font-medium text-[#828FA3] "> Name</p>
                    <input type="text" placeholder='e.g. Web Design' className="flex items-center px-3 font-medium rounded text-[14px] outline-0 border  w-full h-[40px] text-[#3E3F4E]" />
                </div>
                <div className="gap-2 flex flex-col mb-3">
                    <p className="text-[14px] font-medium text-[#828FA3] "> Column</p>
                    <div className='flex items-center '>
                        <div className=" flex items-center px-3 font-medium rounded text-[14px] outline-0 border  w-[90%] h-[40px] text-[#3E3F4E]" >Todo </div>
                        <IoClose className="pl-2 text-[35px] text-[#828FA3] " />
                    </div>
                    <div className='flex items-center '>
                        <div className=" flex items-center px-3 font-medium rounded text-[14px] outline-0 border  w-[90%] h-[40px] text-[#3E3F4E]" >Doing </div>
                        <IoClose className="pl-2 text-[35px] text-[#828FA3] " />
                    </div>
                    <button className="text-[#635FC7] py-2 font-medium rounded-[40px] text-[14px] bg-[#E4EBFA] " >+ Add New Column</button>
                </div>
                <button className="text-[#E4EBFA] py-2 font-medium rounded-[40px] text-[14px] bg-[#635FC7] " > Save Changes</button>
            </div>
        </Modal>

    )
}

export default NewBoard

{/* <IoClose className="pl-2 text-[35px] text-[#828FA3] "/>
<IoClose className="pl-2 text-[35px] text-[#828FA3] "/> */}