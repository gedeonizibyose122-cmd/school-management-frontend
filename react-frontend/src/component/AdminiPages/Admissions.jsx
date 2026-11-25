import { motion } from "framer-motion";

export default function Admissions(){

    return(
        <motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            
            <h1 className="text-2xl font-bold"> Admission</h1>
            <p className="text-lg font-bold">
                Give final sign-off on new student admissions, manage student transfers,
                 and handle disciplinary records or suspensions.
            </p>
        </motion.div>
    )
}