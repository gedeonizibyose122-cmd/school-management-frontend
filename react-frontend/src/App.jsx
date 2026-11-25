
import { Navigate, Route,Routes} from 'react-router-dom'



import NavigationBar from './component/NavigationBar.jsx'

// Secretary imports
import Secretary from './component/SecretaryComponent.jsx' // parant one
import Student from './component/SecretaryPages/Student.jsx'
import Teacher from './component/SecretaryPages/Teacher.jsx'
import Class from './component/SecretaryPages/Class.jsx'
import Admission from './component/SecretaryPages/Admission.jsx'
import Notice from './component/SecretaryPages/Notice.jsx'
import Anauncement from './component/SecretaryPages/Anauncement.jsx'
import Report from './component/SecretaryPages/Report.jsx'
import Calender from './component/SecretaryPages/Calender.jsx'


 // Accountant imports
 import Accountant from './component/AccountantComponent.jsx' // parant one
import FeeStudent from './component/AccountatPages/FeeStudent.jsx'
import SchoolExpenses from './component/AccountatPages/SchoolExpenses.jsx'
import StaffPayroll from './component/AccountatPages/StaffPayroll.jsx'
import FinancialReporting from './component/AccountatPages/FinancialReporting.jsx'  



 // Admini import 
import Admini from './component/AdminiComponent.jsx' //parent one
import Dashbord from './component/AdminiPages/ExcutiveDashbord.jsx'
import Academic from './component/AdminiPages/Academic.jsx'
import FinancialApprovals from './component/AdminiPages/FinancialApproval.jsx'
import StaffRolemanagement from './component/AdminiPages/StaffRolesmanagement.jsx'
import Admissions from './component/AdminiPages/Admissions.jsx'
import Annauncements from './component/AdminiPages/Annauncement.jsx'
import SystemSettings from './component/AdminiPages/SystemSetting.jsx'







   export  default function App() {


  return (
    <div>
      
     <NavigationBar/>

     <Routes>

        {/* default redirect when opening localhost:5173/ */}
      <Route path='/' element={<Navigate to="/Secretary/Student" replace/>}/>
     
      {/* Secretary Routes */}
      <Route path='/Secretary' element={<Secretary/>}> 
      <Route index element={<Student/>}/>
      <Route path='Student' element={<Student/>}/>
      <Route path='Teacher' element={<Teacher/>}/>
      <Route path='Class' element={<Class/>}/>
      <Route path='Admission' element={<Admission/>}/>
      <Route path='Notice'element={<Notice/>}/> 
      <Route path='Anauncement'element={<Anauncement/>}/>
      <Route path='Report' element={<Report/>}/>
      <Route path='Calender' element={<Calender/>}/>

      </Route>

       {/* Accountant Routes */}
      <Route path='/Accountant' element={<Accountant/>}>
      <Route index element={<Navigate to="FeeStudent" replace/>}/>

      <Route path='FeeStudent' element={<FeeStudent/>}/>
      <Route path='SchoolExpenses' element={<SchoolExpenses/>}/>
      <Route path='StaffPayroll' element={<StaffPayroll/>}/>
      <Route path='FinancialReporting' element={<FinancialReporting/>}/>
      </Route>

      
    {/* Admini Routes */}

    <Route path='/Admini' element={<Admini/>}>
    <Route index element={<Navigate to="Dashbord" replace/>}/>
    <Route path='Dashbord' element={<Dashbord/>}/>
    <Route path='Academic' element={<Academic/>}/>
    <Route path='FinancialApprovals' element={<FinancialApprovals/>}/>
    <Route path='StaffRolesmanagement' element={<StaffRolemanagement/>}/>  
    <Route path='Admissions' element={<Admissions/>}/>
    <Route path='Announcements' element={<Annauncements/>}/>
    <Route path='SystemSettings' element={<SystemSettings/>}/>

    </Route>

     </Routes>
    
    </div>
      
  
     
  );
}

