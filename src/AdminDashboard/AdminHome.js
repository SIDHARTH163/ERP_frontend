import React , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Time_table from './AdminComponets/Time_table'
import Add_teachers from './Screens/Add_teachers'
import Add_timetable from './Screens/Add_timetable'
import Courses from './Screens/Courses'
import Dashboard from './Screens/Dashboard'
import Dashboard_Nav from '../Components/Dashboard_components/Dashboard_Nav'
import Notifications from './Screens/Notifications'
import Manage_subjects from './Screens/Manage_subjects'
import Add_sessions from './Screens/Add_sessions'
export default function AdminHome() {
    const navigate =useNavigate()
  const [dashboard , setdashboard]=useState('false')
  const [courses , setcourses]=useState('false')
  const [teachers , setteachers]=useState('false')
  const [timetable , settimetable]=useState('false')
  const [timetablelist , settimetablelist]=useState('false')
  const [subjects , setsubjects]=useState('false')
  const [send , setsend]=useState('false')
  const [session , setsession]=useState('false')
  const token=localStorage.getItem("Token")
  const changescreen =(str)=>{
    if(str === "teachers"){
      setteachers(true)
      setcourses(false)
      setdashboard(false)
      settimetable(false)
      settimetablelist(false)
      setsubjects(false)
      setsend(false)
      setsession(false)
    }else if(str === "timetable"){
     setteachers(false)
     setcourses(false)
     setdashboard(false)
     settimetable(true)
     settimetablelist(false)
     setsubjects(false)
     setsend(false)
     setsession(false)
    }
    else if(str==="courses"){
setcourses(true)
setdashboard(false)
setteachers(false)
settimetable(false)
settimetablelist(false)
setsubjects(false)
setsend(false)
setsession(false)
    }
    else if(str==="timetablelist"){
        setcourses(false)
        setdashboard(false)
        setteachers(false)
        settimetable(false)
        settimetablelist(true)
        setsubjects(false)
        setsend(false)
        setsession(false)
            }
            else if(str==="send_not"){
                setcourses(false)
                setdashboard(false)
                setteachers(false)
                settimetable(false)
                settimetablelist(false)
                setsubjects(false)
                setsend(true)
                setsession(false)
                    }
                    else if(str==="subjects"){
                        setcourses(false)
                        setdashboard(false)
                        setteachers(false)
                        settimetable(false)
                        settimetablelist(false)
                        setsend(false)
                        setsession(false)
                        setsubjects(true)
                            }
                            else if(str==="sessions"){
                                setcourses(false)
                                setdashboard(false)
                                setteachers(false)
                                settimetable(false)
                                settimetablelist(false)
                                setsend(false)
                                setsubjects(false)
                                setsession(true)
                                    }
  }
  useEffect(()=>{
    if(!token){
      
      navigate('/')
    
     
      }
  })
  return (
    <div>
<main className="bg-gray-100  rounded-2xl h-auto overflow-hidden ">
    <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg w-80 ">
            <div className="bg-white h-full rounded-2xl ">
                <div className="flex items-center justify-center pt-6">
                    <svg width="35" height="30" viewBox="0 0 256 366" version="1.1" preserveAspectRatio="xMidYMid">
                        <defs>
                            <linearGradient x1="12.5189534%" y1="85.2128611%" x2="88.2282959%" y2="10.0225497%" id="linearGradient-1">
                                <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%">
                                </stop>
                                <stop stopColor="#FF0057" offset="86.1354%">
                                </stop>
                            </linearGradient>
                        </defs>
                        <g>
                            <path d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z" fill="#001B38">
                            </path>
                            <circle fill="url(#linearGradient-1)" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                            </circle>
                            <circle fill="url(#linearGradient-1)" opacity="0.5" transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) " cx="147.013244" cy="147.014675" r="78.9933938">
                            </circle>
                        </g>
                    </svg>
                </div>
                <nav className="mt-6">
                    <div>
                        <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500  " href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Dashboard
                            </span>
                        </a>
                        <a onClick={()=>changescreen('teachers')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Teachers
                            </span>
                        </a>
                        <a onClick={()=>changescreen('courses')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Courses
                            </span>
                        </a>
                        <a onClick={()=>changescreen('sessions')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path d="M12 14l9-5-9-5-9 5 9 5z" />
  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
</svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Sessions
                            </span>
                        </a>
                        <a onClick={()=>changescreen('subjects')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Subjects
                            </span>
                        </a>
                        <a onClick={()=>changescreen('send_not')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Send Notification
                            </span>
                        </a>
                        
                        <a className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Students
                            </span>
                        </a>
                        
                        <a onClick={()=>changescreen('timetable')} className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Manage Time Table
                            </span>
                        </a>
                        <a onClick={()=>changescreen('timetablelist')}  className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" className="m-auto" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Time Table
                            </span>
                        </a>
                        <a className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Reports
                            </span>
                        </a>
                        <a className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                            <span className="text-left">
                                <svg width="20" fill="currentColor" height="20" className="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Settings
                            </span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div className="flex flex-col  w-full pl-0 md:p-4 md:space-y-4">
            <Dashboard_Nav/>
            {
             dashboard ?<Dashboard/>
             :
             (
              teachers ? <Add_teachers/>
              :
              (
                courses ?<Courses/>
                :(
                    timetable?<Add_timetable/>
                    :(
                        timetablelist ?<Time_table/>:
                       (
                        send ?<Notifications/>:
                        (
                            subjects ?<Manage_subjects/>
                            :(
                                session ?<Add_sessions/>:
                                <>
                            
                        
                    
                        <Dashboard/>
                        
                            
                            </>
                            )
                        )
                        
                       )
                    )
                )
              )
             )
            }
            </div>
        </div>
    </main>


    </div>
  )
}