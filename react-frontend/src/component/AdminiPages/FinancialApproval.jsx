import { motion } from "framer-motion";

export default function FinancialApprovals(){

    return(
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:15, y:0}}
        transition={{duration:0.5}}>

            <h1 className="text-2xl font-bold"> FinancialApproval</h1>
            <p className="text-lg text-slate-400">
                Review financial summaries from the Accountant, approve major school expenses or budgets, 
                authorize staff payroll runs,
                 and grant fee waivers or scholarships.
            </p>
        </motion.div>
    )
}