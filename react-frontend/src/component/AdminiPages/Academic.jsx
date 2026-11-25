
import { motion } from "framer-motion";

export default function Academic(){

    return(
        <motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            
            <h1 className="text-2xl font-bold">AcademicOversight</h1>
            <p className="text-lg font-medium text-slate-600">
                Monitor class performance, approve term exam results before publication, oversee timetable structures,
                 and track curriculum progress across grades (e.g., l3=l5).</p>
                 </motion.div>
    )
}