
import { motion } from "framer-motion";

export default function Annauncements(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>

            <h1 className="text-2xl font-bold"> Annauncement</h1>
            <p className="text-2xl font-bold">

                Publish official circulars, announcements,
                 and academic calendar events visible across all portals (staff, students, and parents).
            </p>
        </motion.div>
    )
}