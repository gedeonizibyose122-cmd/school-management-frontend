
import { Outlet,} from "react-router-dom";
import SidebarNav from "./SecretarySidebarNav";


  function DashboardLayout(){

    return(

      <div className="flex h-screen w-screen bg-slate-100 overflow-hidden">

     <SidebarNav/>
  
            {/*header section*/}

         <main className="flex-1 overflow-y-auto p-6">

             {/*2. main content area and header section  */}
           

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden ">
              <header className="h-16 bg-white border-b border-slate-200  flex items-center  px-140  shrink-0 ">
                Dashboard Header
              </header>
            </div>

               
             {/* outlet */}

     
     <Outlet/>
            </main>

         </div>
    );
}

export default DashboardLayout;
