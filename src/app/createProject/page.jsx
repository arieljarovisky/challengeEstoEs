"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CreateProjectForm from "../components/forms/CreateProjectForm";

const CreateProject = () => {
    const router = useRouter();

    const handleCreateProject = (newProject) => {
        const existingProjects = JSON.parse(localStorage.getItem("projects")) || [];
        const updatedProjects = [...existingProjects, { ...newProject, id: Date.now() }];
        localStorage.setItem("projects", JSON.stringify(updatedProjects));
        router.push("/dashboard");
    };

    return (
        <>
            <div className="bg-white">
                <div className="flex items-center px-4 py-4 ml-[4%]">
                    <Link href="/dashboard" className="flex items-center text-gray-700 hover:text-gray-900">
                        <ArrowLeftIcon className="h-5 w-5 mr-2" /> <span>Back</span>
                    </Link>
                </div>
            </div>
            <hr />
            <CreateProjectForm onSubmit={handleCreateProject} />
        </>
    );
};

export default CreateProject;
