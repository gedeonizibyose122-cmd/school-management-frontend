import { Link,useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    GraduationCap,
    BookOpen,
    Users,
    UserPlus,
    Megaphone,
    Bell,
    BarChart3,
    School,
    Calendar,
    } from "lucide-react";

    // motion component wrapper

    const MotionLink= motion.create(Link);

    export default function SecretarySidebarNav(){

        const Location = useLocation();

        // creation of nav menu items

        const menuItems = [
        {name:'Student',path:'/Secretary/Student',icon:GraduationCap},
        {name:'Teacher',path:'/Secretary/Teacher',icon:Users},
        {name:'Class',path:'/Secretary/Class',icon:BookOpen},
        {name:'Admission',path:'/Secretary/Admission',icon:UserPlus},
        {name:'Notice',path:'/Secretary/Notice',icon:Bell},
        {name:'Anauncement',path:'/Secretary/Anauncement',icon:Megaphone},
        {name:'Report',path:'/Secretary/Report',icon:BarChart3},
        {name:'Calender',path:'/Secretary/Calender',icon:Calendar}

        

        ];

        // component layout and render

        return(
            <aside className="w-64 bg-slate-900 text-white flex flex-col shrink-0 h-screen">

                {/*define Brand Header */}

                <div className="h-16 flex items-center px-6 border-b border-slate-800 gap-3">
                <School className="w-6 h-6 text-indigo-400 shrink-0"/>
                <span className="font-bold text-base text-white truncate"> Essjt Secretary</span>
                </div>

                {/*Navigation list*/}

                <nav className="flex flex-col p-4 space-y-2 overflow-y-auto">

                  {/* logics here */}
                  {menuItems.map((item)=>{
                    const Icon = item.icon;
                    const isActivate = Location.pathname === item.name;

                    return(

                        //UI render <MotionLink> component with framer motion animation and react router link
                        <MotionLink
                        key={item.name}
                        to={item.path}
                        
                        whileHover={{
                        x:-6,
                        scale:1.02,
                        transition:{type:"spring",stiffness:400,dumping:25}
                        }}
                        
                        whileTap={{scale:0.98}}
                        className={`flex items-center gap-3 px-4 py-2.5  rounded-lg font-medium text-sm transition-colors  ${
                            isActivate
                            ?'bg-indigo-600 text-white shadow-md':'text-slate-400 hover:bg-slate-800 hover:text-white'
                        } `}>

                        <Icon className={`w-5 h-5 ${isActivate?'text-white':'text-slate-400'}`}/>
                        <span>{item.name}</span>

                        </MotionLink>
                    );
                  })}  

                </nav>

            </aside>

            // main content here

            
        )
    
    }

