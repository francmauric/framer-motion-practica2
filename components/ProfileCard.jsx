import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

function ProfileCard ({name, title, image, bio}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <motion.div
            className="relative w-64 p-4 bg-white rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={toggleExpand} >
                <div className="flex items-center">
                    <img 
                        src={image} 
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover" />
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">{name}</h2>
                        <p className="text-gray-600">{title}</p>
                    </div>    
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity:0, height:0}}
                            animate={{ opacity:1, height:"auto" }}
                            exit={{opacity:0, height:0 }}
                            transition={{duration: 0.3}}
                            className="mt-4 text-gray-700" >
                                <p>{bio}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
        </motion.div>
        
    )
}

export default ProfileCard;