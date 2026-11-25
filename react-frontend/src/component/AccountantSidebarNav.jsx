
import { Link,useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { DollarSign,User,GraduationCap, School } from "lucide-react";


// Motion component wrapper
const MotionLink = motion.create(Link);

export default  function AccountantSidebarNav(){

    const Location = useLocation();

    // creation of nav menu items 

    const MenuItems =[
        {name:"FeeStudent",path:"/Accountant/FeeStudent",icon:GraduationCap},
        {name:"School Expenses",path:"/Accountant/SchoolExpenses",icon:School},
        {name:"Staff Payroll",path:"/Accountant/StaffPayroll",icon:User},
        {name:"Financial Reporting",path:"/Accountant/FinancialReporting",icon:DollarSign}
    ];

    //component layout and render

    return(
     <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 h-screen">
     {/*Define brand header */}

     <div className="h-16 flex items-center px-6 border-b border-slate-500  gap-3">
        <School className="w-6 h-6 text-indigo-400 shrink-0"/>
        <span className="font-bold text-base text-white truncate">Essjt Accountant</span>

     </div>
     
     {/* Navigation list */}

     <nav className="flex flex-col p-4 space-y-2 overflow-y-auto">

        {/* logics here */}


        {MenuItems.map((item)=>{
        
            const Icon = item.icon;
            const isActive = Location.pathname === item.name;

            return(

                // Ui render(MotionLink) with framer motion animation and react router-link

                <MotionLink
                key={item.name}
                to={item.path}
                
                whileHover={{
                    x:-6,
                    scale:1.02,

                    transition:{type:"spring",stiffness:400,dumping:25}

                    
                }}
                
                whileTap={{scale:0.98}}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${
                    isActive
                    ?'bg-indigo-600 text-white shadow-md':'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
                
                ><Icon className={`w-5 h-5 ${isActive?'text-white':'text-slate-400'}`}/>
                <span>{item.name}</span>
                </MotionLink>
            )
        })}

     </nav>
     </aside>   
    );


}

