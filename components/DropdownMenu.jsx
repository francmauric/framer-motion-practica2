import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function DropdownMenu () {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [dropdownRef]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button 
                onClick={toggleMenu}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                    Toggle Menu
            </button>
            {isOpen && (
                <motion.div
                    initial={{ opacity:0, y: -20 }} 
                    animate={{ opacity:1, y:0 }}
                    exit={{opacity:0, y:-20}}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 1</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 2</a>
                            <a href="#encavesado" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Item 3</a>
                </motion.div>
            )}
        </div>
    )
}

export default DropdownMenu;