import React, { useState, useRef } from 'react'
import './darkmode.css'

export default function DarkMode() {
    const [isChecked, setIsChecked] = useState(false);
    const [mode, setMode] = useState('');

    const handleCheck = (event) => {
        setIsChecked(event.target.checked);
        if(isChecked){
            setMode('dark');
        }
        else{
            setMode('');
        }
    }

    return (
        <>
            {/* <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                    <span className="">
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                    <div className={`${{ 'bg-cyan-700': toggleActive }} w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 @click=handleToggleActive`}>
                        <div className="bg-white w-5 h-5 rounded-full shadow-md transform" className={{ 'translate-x-7': toggleActive }}></div>
                    </div>
                    <span className="">
                        <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </span>
                </div >
                <div className="flex justify-center items-center mt-4">
                    <span className="">
                        <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </span>
                    <div className="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 bg-blue-700 @click=handleToggleActive">
                        <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-7"></div>
                    </div>
                    <span className="">
                        <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    </span>
                </div >
            </div > */}
            <div className="dark:bg-gray-900 justify-center flex flex-row items-center">
                <div className="flex flex-row justify-between toggle">
                    <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input onChange={handleCheck} type="checkbox" name="dark-mode" id="dark-toggle" className="checkbox hidden" />
                            <div className="block border-[1px] dark:border-white border-white-900 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 dark:bg-white bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div className="ml-3 dark:text-white text-white font-medium">
                            Dark Mode
                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}
