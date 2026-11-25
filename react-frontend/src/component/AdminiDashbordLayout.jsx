
import { Outlet } from "react-router-dom";

import AdminiSidebarNav from "./AdminiSidebarNav";

export default function AdminiDashbordLayout(){

    return(

        <div className="flex h-screen w-screen bg-slate-400 overflow-hidden">
            
            <AdminiSidebarNav/>

            <main>
                <Outlet/>
            </main>
            </div>
          
    )
}

 