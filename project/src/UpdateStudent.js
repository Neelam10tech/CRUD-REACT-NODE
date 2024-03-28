import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function  UpdateStudent() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    // useEffect(() => {
    //     axios.get("http://localhost:8081/")
    //       .then(res => setData(res.data))
    //       .catch(err => console.log(err));
    //   }, []);

      useEffect(() => {
        // Fetch data for the specific student based on the ID parameter
        axios.get("http://localhost:8081/")
        .then(res => {
            // Check if the response data exists and set the name and email fields based on it
            if (res.data) {
                setName(res.data.name);
                setEmail(res.data.email);
                console.log("res.data",res.data[id])
            } else {
                // Handle case where no data is returned
                console.log('No data received from the server');
            }
        })
            .catch(err => console.log(err));
    }, [id]);

    function handleubmit(e){
     e.preventDefault()
     axios.put("http://localhost:8081/update/"+id, {name,email})
     .then(res =>{
        console.log(res)
        navigate('/')
     }).catch(err =>console.log(err))
    }

    // const handleubmit =() =>{
    //     const index = data.map((item) =>{
    //         return item.id
    //     }).indexOf(id);
    //     const dt = [...data]
    //     dt[index].name = name;
    //     dt[index].email = email
    //     setData(dt)
    // }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleubmit}>
                <h2>Update Students</h2>
                <div>
                <label>Name</label>
                <input type='text' placeholder='Name' value={name} className='form-control' onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                <label>Email</label>
                <input type='email' placeholder='Email' value={email} className='form-control' onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateStudent