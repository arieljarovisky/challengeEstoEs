import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white divide-y divide-solid">
            <div className="flex px-4 py-4 items-center">
                <Image
                    className="relative ml-[5%] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/logo.png"
                    alt="Next.js Logo"
                    width={70}
                    height={37}
                    priority
                />

            </div>
            <div className='flex'>
                <div className='justify-items-start px-4 py-4 ml-[5%] ' >
                    <h1 className="text-lg font-semibold">My projects</h1>
                </div>
                <div className='ml-auto my-auto mr-[5%]	'>
                    <Link href="/add-project">
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                            + Add project
                        </button>
                    </Link>
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Navbar;
