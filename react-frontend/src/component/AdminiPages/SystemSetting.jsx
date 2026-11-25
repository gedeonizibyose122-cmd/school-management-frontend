
import { motion } from "framer-motion";

export default function SystemSettings(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.98}}>

            <h1 className="text-2xl font-bold">System Setting</h1>
            <p className="text-lg font-bold">

                Configure academic years, terms, grading scales, fee structures,
                 and inspect system activity logs for accountability
            </p>

        </motion.div>
    )
}