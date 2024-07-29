import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavBarNuevo from "./NavBarNuevo";

function Header () {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    const burger = {
        opened:(deg) => ({
            rotate:deg,
        }),
        closed: {
            rotate:0,
        }
    }

    const image = {
        scaleNormal: {
            scale: 1,
            transition: {
                delay: 0.2,
                duration:0.4,
                ease:"easeOut",
            }
        },
        scaleDown: {
            scale: 0.85,
            transition: {
                duration:0.4,
                ease:"easeOut",
            }
        }
    }


    return(
        <div className="header-div h-screen w-screen bg-[#eaeaea] overflow-hidden"> 
        <motion.img src="./image/padel.png" alt="padel" 
             className="absolute inset-0 w-full h-full object-cover 
                     origin-bottom" variants={image} animate={isOpen ? 'scaleDown' : 'scaleNormal'} />
        <section className="w-full h-full px-12 pt-4">
             <div className="w-full p-2 border border-[#eaeaea] border-dashed 
                     flex justify-between items-center rounded-lg relative z-40 ">
                 <h1 className="font-bold text-[#eaeaea] text-3xl" >Padel</h1>
                 <div className="space-y-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                     <motion.div className="w-[30px] h-[2px] bg-[#eaeaea]
                                              origin-left " 
                                 variants={burger} 
                                 animate={isOpen ? 'opened' : 'closed'}
                                 custom={"20deg"} ></motion.div>
                     <motion.div className="w-[30px] h-[2px] bg-[#eaeaea] origin-left "
                                 variants={burger} 
                                 animate={isOpen ? 'opened' : 'closed'}
                                 custom={"-20deg"}  ></motion.div>
                     
                 </div>
             </div>
        </section>  
        <AnimatePresence mode="wait">
        {
         isOpen ? (
             <NavBarNuevo />
         ) : null
        }        
         </AnimatePresence>   

     </div>
    )
}

export default Header;