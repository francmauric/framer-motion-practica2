import { motion } from "framer-motion";

const benefits = [
    {
        title: "Mejora la condicion fisica",
        description: "El padel es un excelente ejercicio cardiovascular que mejora tu resistencia y tonifica tus muesculos.",
        image: "/image/padel/padel1.jpg",
    },
    {
        title: "Promueve la socializacion",
        description: "Jugar al padel es una actividad social que te permite conocer gente nueva y fortalecer relaciones.",
        image: "/image/padel/padel2.jpg",
    },
    {
        title: "Reduce el estres",
        description: "La practica regular del padel ayuda a reducir los niveles de estres y mejora tu bienestar mental.",
        image: "/image/padel/padel3.jpg",
    },
    {
        title: "Mejora la coordinacion",
        description: "El padel requiere coordinacion mano-ojo y agilidad, lo que mejora tus habilidades motoras.",
        image: "/image/padel/padel4.jpg",
    },
    {
        title: "Mejora la coordinacion",
        description: "El padel requiere coordinacion mano-ojo y agilidad, lo que mejora tus habilidades motoras.",
        image: "/image/padel/padel5.jpg",
    },
    
]

const cardVariants = {
    offscreen: {
        y:100,
        opacity:0,
    },
    onscreen: {
        y:0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

function Beneficios () {


    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Beneficios de Jugar al Padel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit,index) => (
                        <motion.div
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            key={index}
                            whileHover={{scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)"}}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true, amount:0.8}}
                            variants={cardVariants}
                        >
                            <img src={benefit.image} alt={benefit.title} className="w-full h-48 object-cover" />
                            <div className="p-4 cursor-pointer">
                                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                <p >{benefit.description} </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Beneficios;
