import { useEffect, useState } from "react";
import {motion} from "framer-motion";
 


function Logo () {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position)
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    }, []);

    const logoVariants = {
        center: {
            top:"50%",
            left:"50%",
            scale:1,
            rotate:0,
        },
        left: {
            top:"10%",
            left:"5%",
            scale:0.8,
            rotate:-10,
        },
        right: {
            top:"20%",
            right:"5%",
            scale:0.8,
            rotate:10,
        },
    };

    let logoPosition = "center"; 
        
    if (scrollPosition > window.innerHeight) {
            logoPosition = "left";
    } else if (scrollPosition > window.innerHeight * 2) {
        logoPosition = "right"
    }
    


    return (
        <motion.div 
            className="fixed z-50 "
            variants={logoVariants}
            initial="center"
            animate={logoPosition}
            transition={{ type:"spring", stiffness: 300, damping:30 }}
        >
            <img src="/image/logo.jpeg" alt="Logo" className="w-40 rounded-full" />
        </motion.div>
    )
}

export default Logo;