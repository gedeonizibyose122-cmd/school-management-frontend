
import {motion} from 'framer-motion';

export default function StaffPayroll(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            <h1 className='text-2xl font-bold'>Staff Payroll Management</h1>
            <p>This is the Staff Payroll Management page.</p>
        </motion.div>
    )
}