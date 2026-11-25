
import {motion} from 'framer-motion';


export default function SchoolExpenses(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            <h1 className='text-2xl font-bold'>School expenses Management</h1>
            <p className='text-lg text-slate-600'>This is the School expenses Management page.</p>
        </motion.div>
    )
}