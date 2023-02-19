import React from 'react'
import {Link} from 'react-router-dom'
import { axiosClient } from '../api/axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card({data,getUsers}) {
    
  const Delete=(data)=>{
          if (!window.confirm('Are you sure !!')) {
              return 
          }
          else{
               axiosClient.delete(`/users/${data.id}`).then(()=>console.log(data.id + 'deleted'))
               getUsers()
               toast.success('Deleted Successfully', {
                position: toast.POSITION.TOP_RIGHT
            });
          }
  }


return (
<div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
    <div className="px-6 py-4">
        <div className='flex justify-between'>
        <div className="font-bold text-xl mb-2 ">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</div>
        <span className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{data.created_at.split(' ')[0]}</span>    
        </div> 
        <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
        </p>
    </div>
    <div className="px-6 pt-4 pb-2 text-center">
        <span onClick={()=>Delete(data)} className="inline-block bg-red-700 rounded-sm  px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Delete</span>
        <Link to={'/user/'+data.id} className="inline-block bg-green-700 rounded-sm  px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">Update</Link>
    </div>
</div>

)
}

export default Card
