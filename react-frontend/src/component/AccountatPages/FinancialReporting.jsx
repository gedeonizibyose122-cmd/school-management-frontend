
import {motion} from 'framer-motion';

export default function FinancialReporting(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>
            <h1 className='text-2xl font-bold'>Financial Reporting</h1>
            <p className='text-lg text-slate-600'>This is the Financial Reporting page.</p>
        </motion.div>
    )
}