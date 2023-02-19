import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosClient } from '../api/axios';
import Card from '../components/Card'
import Loader from '../components/Loader';
import Pagination from '../components/Pagination'
import { useStateContext } from '../context/Context'
import '../style/home.scss'

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        getUsers()
    }, [])


    const getUsers=()=>{
        setLoading(true)
        axiosClient.get('/users')
          .then(({ data }) => {
             setTimeout(()=>{
                setUsers(data.data)
                setLoading(false)
             },1000)
           
          })
          .catch(() => {
            setLoading(false)
          })
    }
    
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

return (
          <>
            <Link to={'/user/new'} className="inline-block rounded-sm  px-3 py-1 text-sm font-semibold text-white mt-7 ml-7 mb-2 bg-cyan-900">Add User</Link>
           {loading ? <Loader /> : <Pagination onPageChange={handlePageChange}  cards={users.map((e, i) => <Card key={i} index={i} getUsers={getUsers} data={e} />)} />}
          </>
)
}

export default Users
