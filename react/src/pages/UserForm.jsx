import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosClient } from '../api/axios';

function UserForm() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [user, setUser] = useState({
       id:null,
       name:'',
       email:'',
       password:'',
       password_confirmation:'',
       img:''
    });
    const [loading, setLoading] = useState(false);

    if (id) {
        useEffect(()=>{
          setLoading(true)
          axiosClient.get(`/users/${id}`)
            .then(({ data }) => {
                  setUser(data)
                  setLoading(false)
            })
            .catch(() => {
              setLoading(false)
            })
        },[])
    }


    const BtnHandler=()=>{
      if (user.id) {
        axiosClient.put(`/users/${user.id}`, user)
          .then(() => {
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
               console.log(err)
            }
          })
      } else {
        axiosClient.post('/users', user)
          .then(() => {
            navigate('/users')
          })
          .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
              console.log(user)
              console.log(err)
            }
          })
      }
    
    }


    const InputHandler=(e)=>{
          const {name,value,files}=e.target
          if (files) {
            const selectedFile = files[0];
            setUser({ ...user, [name]: selectedFile });
          } else if (value) {
            setUser({ ...user, [name]: value });
          }
          console.log(user);
    }

       

  return (
      <>
        {!loading && <div className='container'>
       <div class="max-w-md mx-auto border-spacing-8 border-2 px-8 py-5  mt-8">
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span class="text-gray-700">Name</span> 
              <input type={'text'} name='name' value={user.name} class="  form-input block w-full mt-1" placeholder="Name" onChange={InputHandler} />
            </label>
            <label class="block">
              <span class="text-gray-700">Email</span>
              <input type={'text'} name='email' value={user.email} class=" form-input block w-full mt-1" placeholder="Email"  onChange={InputHandler} />
            </label>
            <label class="block">
              <span class="text-gray-700">Password</span>
              <input type={'text'} name='password' class=" form-input block w-full mt-1" placeholder="Pasword"  onChange={InputHandler} />
            </label>
            <label class="block">
              <span class="text-gray-700">Confirm Password</span>
              <input type={'text'} name='password_confirmation' class=" form-input block w-full mt-1" placeholder="Confirm Password"  onChange={InputHandler} />
            </label>
            <label class="block">
              <span class="text-gray-700">Image</span>
              <input type={'file'} name='img' class=" form-input block w-full mt-1"   onChange={InputHandler} />
            </label>
            <input type={'submit'} onClick={BtnHandler} className='class="block py-2 text-purple-100 bg-cyan-900   rounded shadow-lg shadow-purple-300"' value={id ? 'Confirm Update' : 'Add User'} />
          </div>
        </div>
     </div>
}
      </>
  )
}

export default UserForm