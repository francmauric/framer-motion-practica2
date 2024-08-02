import { useEffect, useState } from "react";
import {motion, transform} from "framer-motion";
 


function Logo ({ sectionRefs }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [logoPosition, setLogoPosition] = useState('center');

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
            transform: "translate(-50%, -50%)",
        },
        left: {
            top:"10%",
            left:"5%",
            scale:0.8,
            rotate:-10,
            transform:"translate(0%,0%)",
        },
        right: {
            top:"10%",
            left: "auto",
            right:"5%",
            scale:0.8,
            rotate:10,
            transform: "translate(0%,0%)",
        },
        bottomLeft: {
            top:"auto",
            bottom:"10%",
            left:"5%",
            scale:2,
            rotate:-15,
            transform:"translate(0%,0%)",
        },
    };
    
    useEffect(() => {
        const { section1Ref, section2Ref, section3Ref, section4Ref, section5Ref } = sectionRefs;

        const section1Top = section1Ref.current.offsetTop;
        const section2Top = section2Ref.current.offsetTop;
        const section3Top = section3Ref.current.offsetTop;
        const section4Top = section4Ref.current.offsetTop;
        const section5Top = section5Ref.current.offsetTop;

        let logoPosition = 'center';

        if (scrollPosition >= section5Top) {
            logoPosition = "bottomLeft";
            } else if (scrollPosition >= section4Top) {    
                logoPosition = "right";
        } else if (scrollPosition >= section3Top ) {
                logoPosition = "left";
        } else if (scrollPosition >= section2Top ) {
                logoPosition = "right";
        } 
        
        setLogoPosition(logoPosition)
    }, [scrollPosition,sectionRefs])
   


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