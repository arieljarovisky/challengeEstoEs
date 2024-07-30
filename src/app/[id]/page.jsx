"use client";

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation'; // Usa useParams para obtener parámetros
import { useState, useEffect } from 'react';

const EditProject = () => {
  const { id } = useParams(); // Obtén el ID del parámetro de la URL
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    if (id) {
      const storedData = localStorage.getItem('projects');
      if (storedData) {
        const projects = JSON.parse(storedData);
        const projectToEdit = projects.find(p => p.id === parseInt(id));
        if (projectToEdit) {
          setProject(projectToEdit);
        } else {
          alert('Project not found');
          router.push('/'); // Redirige si no se encuentra el proyecto
        }
      }
      setLoading(false);
    }
  }, [id, router]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (project) {
      const storedData = localStorage.getItem('projects');
      if (storedData) {
        const projects = JSON.parse(storedData);
        const updatedProjects = projects.map(p => p.id === project.id ? project : p);
        localStorage.setItem('projects', JSON.stringify(updatedProjects));
      }
      router.push('/');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex items-center py-4 mb-5 bg-white">
        <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-gray-900">
          <ArrowLeftIcon className="md: h-5 w-5 ml-5 " /> <span>Back</span>
          <span className='ml-3 font-bold'>Edit project</span>
        </Link>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center mt-2">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
          <div className="bg-white">
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="projectName" className="block text-gray-700">
                Project name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={project.projectName}
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
                value={project.description}
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
                value={project.projectManager}
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
                value={project.assignedTo}
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
                value={project.status}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Enabled">Enabled</option>
                <option value="Disabled">Disabled</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-30 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProject;
