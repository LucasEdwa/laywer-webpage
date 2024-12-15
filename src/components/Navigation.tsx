import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex justify-between w-full absolute">
            <div className="w-full flex flex-col text-white items-center">
                <div className="border-b-2 w-fit   p-2">
                    <h1 className="text-center text-3xl">MIRELLA</h1>

                </div>
                <div className="text-center p-2 text-xs">
                    ADVOKATBYRÅ | GÖTEBORG
                </div>
            </div>
            <button onClick={toggleMenu} className="text-white focus:outline-none md:hidden p-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            <nav className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out text-white w-64 z-40 md:relative md:translate-x-0 md:flex md:items-center md:w-auto`}>
                <div className="flex items-center justify-between p-4 md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4 text-sm md:flex md:space-x-4">
                    <Link to="/" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf]">Home</Link>
                    <Link to="/about" onClick={handleLinkClick} className="block text-white no-underline py-2.5 px-4 rounded transition duration-200 hover:bg-gradient-to-r from-[#6A329F] via-[#9F6BB3] to-[#ccaddf]">About</Link>
                </div>
            </nav>
        </div>
    );
}