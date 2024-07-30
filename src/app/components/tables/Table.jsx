"use client"
import { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Table = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div className="md:px-[5%] py-[3%]">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 hidden md:table">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project info</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Manager</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned to</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap ">
                                <p className='font-md text-gray-900'>Landing page</p> 
                                <p className='text-xs text-gray-500'>Creation date:  09/09/2020 10:30 am</p>
                            </td>
                            <td className="px-6 py-4  whitespace-nowrap text-sm text-gray-500 ">
                              <p className='my-auto'>Walt Cosani</p>  
                            </td>
                            <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-500 flex">
                                <div>
                                    <Image
                                        width={30}
                                        height={50}
                                        src="/image.png"
                                        alt="Profile"
                                        className="rounded-full object-cover mr-2"
                                    />
                                </div>
                                <p className='mt-1'>Ignacio Truffa</p>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Completed</td>
                            <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 absolute">
                                <button
                                    onClick={() => handleToggle(1)}
                                    className="flex items-center p-2 text-gray-500 hover:text-gray-700"
                                >
                                    <EllipsisVerticalIcon className="h-5 w-5 mt-3" />
                                </button>
                                {open === 1 && (
                                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="p-1">
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
                                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
                                        </div>
                                    </div>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="md:hidden">
                    <div className="bg-white mt-5">
                        <div className="relative border border-gray-200  p-4 w-full">
                            <button
                                onClick={() => handleToggle(1)}
                                className="absolute top-2 right-2 flex items-center p-2 text-gray-500 hover:text-gray-700"
                            >
                                <EllipsisVerticalIcon className="h-5 w-5" />
                            </button>
                            <div className="flex items-center mb-4">
                                <div className="text-gray-700 ">
                                    <div className="text-gray-700 mb-1">Landing page</div>
                                    <div className="text-gray-400">
                                        <span className="text-[12px]">Creation date: 09/09/2020 10:30 am</span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <Image
                                            width={40}
                                            height={80}
                                            src="/image.png"
                                            alt="Profile"
                                            className="rounded-full object-cover"
                                        />
                                        <span className="ml-2">Ignacio Truffa</span>
                                    </div>
                                </div>
                            </div>
                            {open === 1 && (
                                <div className="absolute right-0 top-12 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="p-1">
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</button>
                                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
