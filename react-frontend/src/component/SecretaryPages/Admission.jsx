
import { motion } from "framer-motion";


function Admission(){

    return(

        <motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:15,y:0}}
        transition={{duration:0.3,ease:"easeOut"}}>

        <div>
    <h1 className="text-2xl text-slate-800 font-bold">The Admission Pages</h1>
    <p className="text-slate-600 mt-2">animated page using framer motion</p>
        </div>
        </motion.div>
    )
}

export default Admission;