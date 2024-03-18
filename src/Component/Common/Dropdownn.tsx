"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { ArrowDown } from "@icons";
import { DropdownProps } from "./types";
import React from "react";

const Dropdownn = ({ value, options, onChange }: DropdownProps) => {
    const [showOptions, setShowOptions] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && !dropdownRef?.current?.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} onClick={() => setShowOptions(!showOptions)} className={`cursor-pointer relative border border-[#828FA33F] ${showOptions ? " border-[#635FC7]" : ""} flex justify-between px-4 py-2 rounded items-center`}>
            <span className="text-[13px] leading-[23px] dark:text-white font-medium">{value}</span>
            <div className="w-3.5 h-[20px] flex justify-center items-center">
                <FaChevronDown className="text-[#635FC7] "/>
            </div>

            {showOptions && options?.length ? (<div className="absolute w-full dark:bg-[#20212C] bg-white flex flex-col gap-1 left-0 top-11 rounded-lg p-2 max-h-[117px] overflow-y-auto">
                {options?.map((item, index) => {

                    return (
                        <div
                            onClick={() => {
                                onChange && onChange(item);
                                setShowOptions(false);
                            }}
                            key={index}
                            className={`${value === item.label ? "bg-[#828FA33F]" : ""} hover:bg-[#828FA33F] py-1 px-2 rounded cursor-pointer`}
                        >
                            <span className="text-[13px] leading-[23px] font-medium text-[#828FA3]">{item.label}</span>
                        </div>
                    )
                })}
            </div>) : null}
        </div>
    );
}

export default Dropdownn;
