
import {motion} from 'framer-motion';


export default function FeeStudent(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            
               <h1 className='text-2xl font-bold'>Fee Student Management</h1>
               <p className='text-lg text-slate-600'>This is the Fee Student Management page.</p>
        </motion.div>
    );
}