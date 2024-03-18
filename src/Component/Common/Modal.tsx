
import React from "react";
import { ModalProps } from "./types";
import { Switch } from "antd";
import { TbLayoutBoardSplit } from "react-icons/tb";

import img3 from '../../img/Combined Shape.png'
import img4 from '../../img/Combined Shape2.png'
import img5 from '../../img/eye-slash.1.png'


const Modal = ({ children, open, onClose, centerContent = true, className, customPosition, isFullScreen = true }: ModalProps) => {

    return (
        <div className={`absolute ${open ? "h-svh" : "h-[-100px]"} ${isFullScreen ? "z-20" : ""} left-0 top-0 flex items-center justify-center w-full`}>
            <div onClick={() => onClose ? onClose() : {}} className={`${open ? "h-svh" : ""} w-full bg-[#000] opacity-50`} />
            <div className={`${open ? `${centerContent ? "top-1/2 transform -translate-y-1/2" : customPosition}` : "top-[-1500px]"}   max-w-[90%] sm:max-w-[480px] rounded-md transition-all duration-500 ease-in-out absolute  bg-white dark:bg-[#2B2C37] border-r-2 border-[#3E3F4E]-500 border-[#3E3F4E]-500 dark:border-solid dark:border-[#3E3F4E]  ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
