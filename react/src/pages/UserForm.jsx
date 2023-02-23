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
       image:''
    });

    const {name,password,password_confirmation,image,email}=user
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


    const BtnHandler=(e)=>{
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
        const formData = new FormData();
        formData.append('email', email);
        formData.append('image', image);
        formData.append('name', name);
        formData.append('password', password);
        formData.append('password_confirmation', password_confirmation);
        axiosClient.post('/users', formData)
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

      e.preventDefault()
    
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
       <form onSubmit={BtnHandler} encType='multipart/form-data' class="max-w-md mx-auto border-spacing-8 border-2 px-8 py-5  mt-8">
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
              <input type={'file'} name='image' class=" form-input block w-full mt-1"   onChange={InputHandler} />
            </label>
            <input type={'submit'}  className='class="block py-2 text-purple-100 bg-cyan-900   rounded shadow-lg shadow-purple-300"' value={id ? 'Confirm Update' : 'Add User'} />
          </div>
        </form>
     </div>
}
      </>
  )
}

export default UserForm