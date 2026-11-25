
import { Link } from "react-router-dom";

export default function NavigationBar(){

    return(
        <div>
            <nav className="flex items-center  justify-center  justify-between gap-4 p-4 bg-slate-800 text-white">
                
                <Link to="/Secretary/Student" className="hover:text-slate-400">Secretary</Link>
                <Link to="/Accountant" className="hover:text-slate-400" >Accountant</Link>
                <Link to="/Admini" className="hover:text-slate-400">Admini</Link>
            </nav>

             
        </div>
    )
}