
import { motion } from "framer-motion";

export default function StaffRolemanagement() {

    return(

        <motion.div
        
        initial={{opacity:0,y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            
            <h1 className="text-2xl font-bold">StaffRolemanagement</h1>
            <p className="text-lg">

                this invove Create and suspend user accounts,
                 assign system roles (Secretary, Accountant, Teacher, DOS),
                 and approve new staff hires or leave requests.
            </p>
        </motion.div>
    )
}