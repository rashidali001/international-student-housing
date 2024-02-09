import react from 'react'
import { FaBook } from 'react-icons/fa'
import { useState } from 'react'

const Homepage = () =>{

    const [signIn, setSignIn] = useState("yes");

    const handleSignIn = ()=>{
        setSignIn("yes");
    }

    const handleSignUp = ()=>{
        setSignIn("no");
    }

    return (
        <main className='bg-sky-950 w-screen h-screen flex justify-center items-center'>
            <div className='w-3/4 h-3/4 m-auto'>
                 <div className='w-full h-full flex flex-row'>
                    <div className='w-1/2 h-full space-y-4'>
                        <p className='text-3xl text-slate-50'>"International Student Housing Made <span className='font-bold'>Effortless</span>"</p>
                        <p className='tracking-wide text-gray-300 font-light'>In a world where moving abroad to study is the norm, finding housing shouldn't be a headache. We've got your back with International Student Housing Made Effortless. Say goodbye to stress and hello to hassle-free living!</p>
                        <button className='w-fit flex items-center py-1 px-2 border border-slate-50  transition  duration-200 text-slate-50 hover:bg-slate-50 hover:text-sky-950 '> Mission statement  <FaBook className='ml-3' /> </button>
                    </div>
                    
                    <div className='w-1/2 h-full'>
                        {signIn === "yes"?
                        <h1 className='text-lg sm:text-3xl font-semibold text-center text-slate-50'>Sign In</h1> :
                        <h1 className='text-lg sm:text-3xl font-semibold text-center text-slate-50'>Sign Up</h1>
                        }
                        

                        <form className='w-3/4 mx-auto my-4 space-y-4'>

                            <input type="text" placeholder='Username' id='username'
                            className='w-full p-2 bg-slate-50 text-sky-950 outline-none'
                             />

                             { signIn === 'yes'? <></>: 
                             <input type="text" placeholder='Email' id='email'
                             className='w-full p-2 bg-slate-50 text-sky-950 outline-none'
                              />
                             }
                             
                             <input type="text" placeholder='Password' id='Password'
                            className='w-full p-2 bg-slate-50 text-sky-950 outline-none'
                             />
                        </form>
                        {signIn === "yes"? <div className='flex gap-2 w-3/4 mx-auto text-sm my-1'>
                        <p className='text-slate-50'>Forgot password?</p>
                        <p className='text-red-700 hover:cursor-pointer'>Click here</p>
                        </div>  : <></>                        
                        }
                        
                        {signIn === "yes"? 
                         <div className='flex gap-2 w-3/4 mx-auto text-sm my-1'>
                         <p className='text-slate-50'>New user?</p>
                         <p className='text-red-700 hover:cursor-pointer' onClick={handleSignUp}>Sign Up</p>
                         </div> 
                        :<div className='flex gap-2 w-3/4 mx-auto text-sm my-1'>
                        <p className='text-slate-50'>Already a user?</p>
                        <p className='text-red-700 hover:cursor-pointer' onClick={handleSignIn}>Sign In</p>
                        </div>
                        
                         }
                        

                         <div className='w-3/4 mx-auto my-8'>
                            {signIn === "yes"? 
                            <button className='uppercase p-2 text-slate-50 bg-transparent
                            border border-slate-100 w-full transition-all duration-200
                            hover:bg-slate-50 hover:text-sky-950 font-semibold hover:border-none'>Sign In</button>:
                            <button className='uppercase p-2 text-slate-50 bg-transparent
                            border border-slate-100 w-full transition-all duration-200
                            hover:bg-slate-50 hover:text-sky-950 font-semibold hover:border-none' >Sign Up</button>
                            }
                         </div>                            
                    </div>
                 </div>
            </div>            
        </main>
    )

}

export default Homepage;