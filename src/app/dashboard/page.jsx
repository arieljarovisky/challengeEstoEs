import Link from "next/link";
import Table from "../components/tables/Table";

export default function Dashboard() {
  return (
    <>
      <div className='flex bg-white'>
        <div className='justify-items-start px-4 py-4 ml-[4%]' >
          <h1 className="text-lg font-semibold">My projects</h1>
        </div>
        <div className='ml-auto my-auto mr-[5%]	'>
          <Link href="/add-project" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"> 
              + Add project
          </Link>
        </div>
      </div>
      <hr />
      <Table />
    </>
  );
}