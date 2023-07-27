import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { objectArr } from '../../server.js'
import Select from 'react-select';

export default function DropdownComponent() {
    const [selectedItem, setSelectedItem] = useState('Select a Country');
    const [selectedOption, setSelectedOption] = useState(null);
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <>
            {/* <Menu as="div" className="relative inline-block text-left mt-1">
                <div>
                    <Menu.Button className="inline-flex w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
                        {selectedItem}
                        <ChevronDownIcon className="-mr-1 h-5 w-5 absolute right-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a onClick={() => setSelectedItem(res_keys_arr[0])} href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>{res_keys_arr[0]}</a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu> */}
            <Select className="basic-single" classNamePrefix="select" isClearable={isClearable} isSearchable={isSearchable} name="country" options={objectArr} onChange={handleSelectChange} placeholder="Select a Country" />
            {/* <div
                style={{
                    color: 'hsl(0, 0%, 40%)',
                    display: 'inline-block',
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: '1em',
                }}
            ></div> */}
        </>
    )
}
