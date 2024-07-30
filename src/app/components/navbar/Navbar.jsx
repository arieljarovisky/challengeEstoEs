import Image from 'next/image';


const Navbar = () => {
    return (
        <nav className="bg-white">
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
            <hr />
        </nav>
    );
};

export default Navbar;
