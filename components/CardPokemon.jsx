import { useState, useEffect } from "react";
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion";

function CardPokemon ({pokemon}) {
    const [details, setDetails] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    console.log(details)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => {
                setDetails(response.data);
            })
           
            
    }, [pokemon]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    if (!details) return <div>Loading...</div>

    return (
        <motion.div className="max-w-sm mx-auto my-4 p-4 bg-white rounded-lg shadow-lg"
            whileHover={{scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"}}
            transition={{type: "spring",stiffness: 300}}
            >
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{details.name}</h2>
                <button
                    onClick={toggleOpen}
                    className="text-white bg-blue-500 px-2 py-1 rounded-lg focus:outline-none"
                    >
                        {isOpen ? "Close" : "Details"}
                </button>
            </div>
            <motion.img 
                src={details.sprites.front_default}
                alt={details.name}
                className="w-32 h-32 mx-auto my-4"
                initial={{ opacity:0 }}
                animate={{ opacity: 1 }}
                transition={{duration: 0.5}}
            />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height:0, opacity:0, rotate: -10, scale:0.8}}
                        animate={{height: "auto",opacity:1, rotate: 360, scale: 1}}
                        exit={{height:0, opacity:0, rotate: 10, scale: 0.8}}
                        transition={{ duration:0.5 }}
                        className="overflow-hidden"
                    >
                        <div className="mt-4">
                            <p><strong>Height:</strong> {details.height}</p>
                            <p><strong>Weight:</strong> {details.weight}</p>
                            <p><strong>Type:</strong> {details.types.map((type) => type.type.name).join(",")}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default CardPokemon;