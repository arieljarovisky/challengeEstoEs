"use client"
import { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

const Table = ({ data, onDelete }) => {
    const [open, setOpen] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleToggle = (id) => {
        setOpen(open === id ? null : id);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        localStorage.removeItem(`project-${id}`);
        onDelete(id);
    };

    const filteredData = data.filter((item) =>
        item.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.projectManager.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.assignedTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="md:px-[5%] py-[3%]">
            <div className="md:mb-4 ml-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
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
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap ">
                                    <p className='font-md text-gray-900'>{item.projectName}</p>
                                    <p className='text-xs text-gray-500'>Creation date: {item.creationDateTime}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <p className='my-auto'>{item.projectManager}</p>
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
                                    <p className='mt-1'>{item.assignedTo}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.status}</td>
                                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 absolute">
                                    <button
                                        onClick={() => handleToggle(item.id)}
                                        className="flex items-center p-2 text-gray-500 hover:text-gray-700"
                                    >
                                        <EllipsisVerticalIcon className="h-5 w-5 mt-3" />
                                    </button>
                                    {open === item.id && (
                                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                            <div className="p-1">
                                                <Link href={`/${item.id}`} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</Link>
                                                <button  onClick={() => handleDelete(item.id)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="md:hidden">
                    <div className="bg-white mt-5">
                        {currentItems.map((item, index) => (
                            <div className="relative border border-gray-200 p-4 w-full" key={item.id}>
                                <button
                                    onClick={() => handleToggle(item.id)}
                                    className="absolute top-2 right-2 flex items-center p-2 text-gray-500 hover:text-gray-700"
                                >
                                    <EllipsisVerticalIcon className="h-5 w-5" />
                                </button>
                                <div className="flex items-center mb-4">
                                    <div className="text-gray-700 ">
                                        <div className="text-gray-700 mb-1">{item.projectName}</div>
                                        <div className="text-gray-400">
                                            <span className="text-[12px]">Creation date: {item.creationDateTime}</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <Image
                                                width={40}
                                                height={80}
                                                src="/image.png"
                                                alt="Profile"
                                                className="rounded-full object-cover"
                                            />
                                            <span className="ml-2">{item.assignedTo}</span>
                                        </div>
                                    </div>
                                </div>
                                {open === item.id && (
                                    <div className="absolute right-0 top-12 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="p-1">
                                            <Link href={`/${item.id}`} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</Link>
                                            <button onClick={() => handleDelete(item.id)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Previous
                </button>
                <span className="px-4 py-2">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
