
import { NavLink,useLocation } from "react-router-dom";
import {motion} from 'framer-motion'
import { LayoutDashboard,
UserCog,
GraduationCap,
BadgeCheck,
UserCheck,
ShieldCheck,
Megaphone,
Settings
 } from "lucide-react";

 const MotionLink = motion.create(NavLink);

export default function AdminiSidebarNav(){

    const Location = useLocation();

    const adminNavItems = [
  { name: "Dashbord", path: "/Admini/Dashbord", icon: LayoutDashboard },
  { name: "StaffRolesmanagement", path: "/Admini/StaffRolesmanagement", icon: UserCog },
  { name: "Academic", path: "/Admini/Academic", icon: GraduationCap },
  { name: "FinancialApprovals", path: "/Admini/FinancialApprovals", icon: BadgeCheck },
  { name: "Admissions", path: "/Admini/Admissions", icon: UserCheck },
  { name: "Announcements", path: "/Admini/Announcements", icon: Megaphone },
  { name: "System Settings", path: "/Admini/SystemSettings", icon: Settings },
];

    return(

        <div>
            <aside className="w-64 bg-slate-900 h-screen text-white flex flex-col shrink-0">

                {/*header section */}
                <div className=" h-16 flex items-center px-6 border-b border-slate-800 gap-3">
                    <ShieldCheck className="w-6 h-6 text-indigo-400"/>
                    <span className="text-white font-bold tracking-wide">Essjt Admini</span>
                </div>

                

                <nav className="px-4 py-2.5 text-slate-400 font-bold tex-sm">

                    {/* logics here */}

                    {adminNavItems.map((item)=>{
                        const Icon = item.icon;
                        const isActive = Location.pathname === item.path;

                        return(
                            <MotionLink
                            key={item.name}
                            to={item.path}
                            
                            
                            whileHover={{
                                x:-6,
                                scale:1.02,
                                transition:{type:"spring",stiffness:400,damping:25}
                            }}
                            
                            whileTap={{scale:0.98}}
                            
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors${
                                isActive
                                ?'bg-indigo-600 text-white shadow-md':'text-slate-400 hover:bg-slate-800 hover:text-white'
                            }`}>
                              
                            <Icon className={`w-5 h-5${isActive ? 'text-white':'text-slate-400'}`}/>
                            <span>{item.name}</span>
                            </MotionLink>
                        )
                    })}
                </nav>
            </aside>
        </div>
    )

    }