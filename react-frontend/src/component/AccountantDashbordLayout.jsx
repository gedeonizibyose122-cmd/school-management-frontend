
import {Outlet} from 'react-router-dom'
import AccountantSidebarNav from './AccountantSidebarNav.jsx'


export default function AccountantDashboardLayout() {

    return(
        <div className='flex h-screen w-screen bg-slate-100 overflow-hidden'>
            <AccountantSidebarNav/>
            <main className='flex-1 p-4'>

                <div className='flex-1 flex flex-col  min-w-0 overflow-hidden'>
                    <header className='h-16  bg-white border-b border-slate-200  flex items-center px-130 shrink-0'>
                     Accountant Dashboard Header
                    </header>

                </div>
                <Outlet/>
            </main>
        </div>
    )
}