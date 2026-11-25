
import {easeOut, motion} from 'framer-motion'
import { useState 

} from 'react';
import {GraduationCap,PhoneIcon,Mail,BookOpen, UserPlus, CheckCircle, Phone} from 'lucide-react'

 function StudentRegisterCard(){
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [formData,setFormData] = useState({
        fullName:'',
        email:'',
        phone:'',
        classLevel:'senior1',
        
    });

    const handleChange = (e)=>{
        setFormData({
            ...formData, [e.target.name]: e.target.value });
        };
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsSubmitted(true);

        // reset form data after submission

        setTimeout(()=>{
            setIsSubmitted(false);
            setFormData({
                fullName:'',
                email:'',
                phone:'',
                classLevel:'senior1',
            })
        })
    }

return(
     <div className='flex items-center justify-center w-full w-full py-4 pr-8 shrink-0'>
    <motion.div
    initial={{opacity:0,y:15}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4,ease:easeOut}}
    
    whileHover={{  
        y:-4,
        scale:1.02,
        transition:{type:"spring",stiffness:300,dumping:25}
    }}
    
    whileTap={{scale:0.98}}
    className='  max-w-md w-full  bg-white  rounded-2xl border border-slate-200  p-6 shadow-sm hover:shadow-xl transition-shadow '>

        {/* Header section */}

        <div className='flex items-center gap-3 px border-b border-slate-100 pb4 mb6'>
            <div className='p-3 bg-indigo-50 rounded-xl text-indigo-600'>
                <UserPlus className='w-6 h-6'/>
            </div>

            
            
            <div>
            <h3 className='text-lg font-bold text-slate-800'>Register New student</h3>
            <p className='text-s text-slate-500'>Enter student Details</p>
            </div>
        </div>

           {/*Registraion form */}

           <form onSubmit={handleSubmit} className='space-y-4'>
            
            {/* fullName field */}

            <div>
                <label className='block text-xs font-semibold text-slate-800'>Full Name</label>
                <div className ="relative">
                <GraduationCap className="w-4 h-4 absolute left-3 top-3 text-slate-400"/>
                < input
                type ="text"
                name ="fullName"
                value ={formData.fullName}
                onChange ={handleChange}
                placeholder ="eg.John Doe"
                className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 text-slate-400"/>
            </div> 
            </div>      

            {/*Email field */}

            <div>
            
            <label className='block text-xs font-semibold text-slate-800'>Email</label>
            <div className='relative'>
            
            <Mail className='w-4 h-4 absolute left-3 top-3 text-slate-800'/>

            <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='eg.@gmail'
            className='w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo=500 focus:ring-border-500 text-slate-400'/>

            </div>
            </div>
          
             
             {/* phone field */}
            
            <div>
            
            <label className='bloct text-xs font-semibold text-slate-800'>phone N</label>
            <div className ="relative">
            <PhoneIcon className='w-4 h-4 absolute left-3 top-3 text-slate-800'/>
            <input
            type='number'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='eg.0788xxxxxxxxx'
            className='w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-border-500 text-slate-400'/>
            
            </div>
            </div>


            {/* class level field */}
            
            <div>
            <label className='block text-xs font-semibold text-slate-800'>Assigned Class</label>
            <div className ="relative">
            <BookOpen className='w-4 h-4 absolute left-3 top-3 text-slate-800'/>
            <select
            name ="classLevel"
            value={formData.classLevel}
            onChange={handleChange}
            className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-border-500 text-slate-400"
            >

                <option value="Senior1">Senior1</option>
                <option value="Senior2">Senior2</option>
                <option value="Senior3">Senior3</option>
                <option value="senior4">senior4</option>
            </select>

            </div>
            </div>

            {/* animated submitted button */}

            <motion.button
            type= "Submitted"
            whileHover={{ scale:1.02}}
            whileTap={{ scale:1}}
          
            className={`w-full mt-2  py-2.5 rounded-lg text-sm font-semibold text-white flex items-center  justify-center gap-2 transition-colors ${
            isSubmitted ? 'bg-emeralnd-600':'bg-indigo-600 hover:bg-indigo-700'}`}
            >
            {isSubmitted ? (
                
                <>
                <CheckCircle className='w-4 h-4'/>
                <span> Registered successfully!</span>
               </>
            ):(
                <>
                <UserPlus className='w-4 h-4'/>
                <span> Register Student</span>
                </>

            )}
            </motion.button>
           </form>

    </motion.div>
    </div>

)}

export default StudentRegisterCard;