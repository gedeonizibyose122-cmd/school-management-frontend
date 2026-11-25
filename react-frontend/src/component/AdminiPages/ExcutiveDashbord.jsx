

import { motion } from "framer-motion"

export default function Dashbord(){

    return(
        <motion.div
         initial={{opacity:0, y:15}}
         animate={{opacity:15, y:0}}
         transition={{duration:0.5}}
         >

            <h1 className="text-2xl font-bold">Executive Dashboard</h1>
            <p className="text-lg text-slate-400">Welcome to the Executive Dashboard</p>
            

            <p>
                where View school-wide activity,
                like total enrollment,
                 daily student/staff attendance rates,
                 fee collection vs. arrears, and pending approvals.
            </p>
        </motion.div>
    );
}