import React, { useState } from 'react';
import  { axiosClient } from '../api/axios';
import Loader from '../components/Loader';
import { useStateContext } from '../context/Context';
import '../style/signIn.scss'


function Signup() {
const REGISTER_URI='/signup'
const [values,setValues]=useState({
name:null,
email:null,
password:null,
password_confirmation:null  /* the name is obligatory to be password_confirmation */
})
const {setUser,TokenFunc}=useStateContext()
const [loading,setLoading]=useState(false)
const InputHandler=(e)=>{
const {name,value}=e.target
setValues({...values,[name]:value})
}

const HandleSubmit= (e)=>{
    setLoading(true);
    setTimeout(() => {
      axiosClient
        .post(REGISTER_URI, values)
        .then(({ data }) => {
          TokenFunc(data.token);
          setUser(data.user);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
e.preventDefault()
}

return (
<div className='SignIn_Container'>
    <form className='SignIn_Content' onSubmit={HandleSubmit}>
        <h1 className='SignIn'>Register Form</h1>
        <input type={'text'} className='TextInput' placeholder='Full Name' onChange={InputHandler} name='name' />
        <input type={'text'} className='TextInput' placeholder='Email' onChange={InputHandler} name='email' />
        <input type={'text'} className='TextInput' placeholder='Password' onChange={InputHandler} name='password' />
        <input type={'text'} className='TextInput' placeholder='Confirm Password' onChange={InputHandler}
            name='password_confirmation' />
        <input type={'submit'} className='Submit' value='SignUp' />
        <br />
        <p className="copyrights">&copy;2022 All rights reserved.</p>
    </form>
      {loading && <Loader />}
</div>
)
}



export default Signup
