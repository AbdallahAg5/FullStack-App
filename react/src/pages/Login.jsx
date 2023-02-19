import React, { useState } from 'react'
import  { axiosClient } from '../api/axios'
import Loader from '../components/Loader'
import { useStateContext } from '../context/Context'
import '../style/signIn.scss'

function Login() {
  const LOGIN_URI='/login'
   const [values,setValues]=useState({
    email:null,
    password:null
})
const {setUser,TokenFunc}=useStateContext()
const [err,setErr]=useState({emailErr:null,passErr:null,globalErr:null})
const [loading,setLoading]=useState(false) 
const {emailErr,passErr,globalErr}=err

  const InputHandler=(e)=>{
      const {name,value}=e.target
      setValues({...values,[name]:value})
   }

   const HandleSubmit = (e) => {
    axiosClient
      .post(LOGIN_URI, values)
      .then((res) => {
       setLoading(true);
        setTimeout(() => {
        TokenFunc(res.data.token);
        setUser(res.data.user);
        setLoading(false);
        }, 1000);
      })
      .catch(({ response }) => {
        if (response?.status === 422 && response.data.errors) {
          setErr({
            ...err,
            emailErr: response?.data?.errors?.email,
            passErr: response?.data?.errors?.password,
        });
        } else if (response.status === 422 && !response.data.errors) 
         {
            setErr({
                ...err,
                emailErr:null,
                passErr:null,
                globalErr: response?.data?.message
              });
        }
      });
  
    e.preventDefault();
  };

return (
<div className='SignIn_Container'>
    <form className='SignIn_Content' onSubmit={HandleSubmit}>
    <div className='top-space'></div>
        <h1 className='SignIn'>Login Form</h1>
        {globalErr && <p className='globalerr'>{globalErr}</p>}
        <div className='botton-space'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta</div>
        <input className='TextInput' type={'text'} placeholder='Email' onChange={InputHandler} name='email' />
        {emailErr && <p className='err'>{emailErr}</p>}
        <input className='TextInput' type={'text'} placeholder='Password' onChange={InputHandler} name='password' />
        {passErr && <p className='err'>{passErr}</p>}
        <input type={'submit'} className='Submit' value='Login' />
        <br />
        <p className="copyrights">&copy;2022 All rights reserved.</p>
    </form>
    {loading && <Loader />}
</div>
)
}

export default Login


// abdo@1234
