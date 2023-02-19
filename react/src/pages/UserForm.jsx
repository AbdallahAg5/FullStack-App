import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosClient } from '../api/axios';

function UserForm() {
    const {id}=useParams()
    const [users, setUsers] = useState({
       id:null,
       name:'',
       email:'',
       password:'',
       confirm_password:''
    });
    const [loading, setLoading] = useState(false);

    if (id) {
        useEffect(()=>{
          setLoading(true)
          axiosClient.get(`/users/${id}`)
            .then(({ data }) => {
                  setUsers(data.data)
                  setLoading(false)
            })
            .catch(() => {
              setLoading(false)
            })
        },[])
    }


    const Update=()=>{

    }

       

  return (
    <div>
      <input type={'text'} name='name' placeholder='Name' />
      <input type={'text'} name='email' placeholder='Email' />
      <input type={'text'} name='password' placeholder='Password' />
      <input type={'text'} name='confirm_password' placeholder='Name' />
      <input type={'submit'} onClick={Update} value='Confirm Update' />
    </div>
  )
}

export default UserForm