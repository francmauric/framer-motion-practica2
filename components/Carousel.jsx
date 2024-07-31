import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "./image/padel/padel1.jpg",
    "./image/padel/padel2.jpg",
    "./image/padel/padel3.jpg",
    "./image/padel/padel4.jpg",
    "./image/padel/padel5.jpg",
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000, opacity:0,
        };
    },
    center: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? 1000 : -1000,
                opacity: 0,
                transition: {
                    duration: 0.5,
                },
        };
    },
};

function Carousel () {
    const [[currentIndex, direction], setIndex] = useState([0,0]);

    const nextImage = () => {
        setIndex([currentIndex === images.length - 1 ? 0 : currentIndex + 1, 1]);
    };

    const prevImage = () => {
        setIndex([currentIndex === 0 ? images.length - 1 : currentIndex - 1, -1]);
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto mt-10">
            <div className="overflow-hidden h-80">
                <AnimatePresence initial={false} custom={direction} >
                    <motion.img 
                        key={currentIndex}
                        src={images[currentIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute w-full h-full object-cover" />
                </AnimatePresence>
            </div>
            <div className="flex justify-between absolute inset-0 ">
                <button onClick={prevImage} className="z-10 bg-gray-200 bg-opacity-40 text-xl font-bold hover:bg-blue-700 hover:bg-opacity-50 text-white px-4 py-2 w-30 rounded">
                    Previous
                </button>
                <button onClick={nextImage} className="z-10 bg-gray-200 bg-opacity-40 text-xl font-bold hover:bg-blue-700 hover:bg-opacity-50 text-white px-4 py-2 w-30 rounded">
                    Next
                </button>
            </div>
        </div>
    )
}

export default Carousel;