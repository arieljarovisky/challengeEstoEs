"use client"
import Link from "next/link";
import Table from "../components/tables/Table";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('projects');
    if (storedData) {
      setProjectData(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedProjects = projectData.filter(project => project.id !== id);
    setProjectData(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  };

  return (
    <>
      <div className='flex bg-white'>
        <div className='justify-items-start px-4 py-4 ml-[4%]' >
          <h1 className="text-lg font-semibold">My projects</h1>
        </div>
        <div className='ml-auto my-auto mr-[5%]	'>
          <Link href="/createProject" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            + Add project
          </Link>
        </div>
      </div>
      <hr />
      <Table data={projectData} onDelete={handleDelete} />
    </>
  );
}
export default Dashboard