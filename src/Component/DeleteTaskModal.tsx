import React from 'react'
import Modal from './Common/Modal.tsx'

function DeleteTaskModal({showDeleteTask, setShowDeleteTask}: DeleteTaskProps) {
  return (
    <Modal open= {showDeleteTask} onClose={() => setShowDeleteTask(false)} className={'w-[400px]'}>
        <div className=' flex flex-col bg-white dark:bg-[#2B2C37] p-6 gap-6 rounded'>
            <h2  className='font-medium text-[#EA5555] text-[16px] '> Delete this task? </h2>
            <p className='text-[12px] text-[#828FA3]'>  Are you sure you want to delete the ‘Build Settings UI’ task? This action will remove all columns and tasks and cannot be reversed.</p>
            <div className='flex justify-between'>
                <button className="text-white py-2 font-medium rounded-[18px] w-[45%] text-[14px] bg-[#EA5555] hover:bg-[#FF9898] "> Delete</button>
                <button className="text-[#635FC7] py-2 font-medium rounded-[18px] w-[45%] text-[14px] bg-[#F4F7FD] hover:bg-[#E4EBFA] "> Cancel</button>

            </div>
        </div>
    </Modal>
  )
}

export default DeleteTaskModal