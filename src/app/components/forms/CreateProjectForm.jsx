"use client"
import { useState } from "react";

const CreateProjectForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        projectName: "",
        description: "",
        projectManager: "",
        assignedTo: "",
        status: "Enabled",
        creationDateTime: new Date().toISOString().slice(0, 16),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-2">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-bold mb-6">Create Project</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="projectName" className="block text-gray-700">
                            Project name
                        </label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="projectManager" className="block text-gray-700">
                            Project manager
                        </label>
                        <select
                            id="projectManager"
                            name="projectManager"
                            value={formData.projectManager}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select a person</option>
                            <option value="person1">Person 1</option>
                            <option value="person2">Person 2</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="assignedTo" className="block text-gray-700">
                            Assigned to
                        </label>
                        <select
                            id="assignedTo"
                            name="assignedTo"
                            value={formData.assignedTo}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        >
                            <option value="">Select a person</option>
                            <option value="person1">Person 1</option>
                            <option value="person2">Person 2</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-gray-700">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="Enabled">Enabled</option>
                            <option value="Disabled">Disabled</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="creationDate" className="block text-gray-700">
                            Creation Date
                        </label>
                        <input
                            type="datetime-local"
                            id="creationDateTime"
                            name="creationDateTime"
                            value={formData.creationDateTime}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                            readOnly
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-30 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Create project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProjectForm;
