import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateStudent() {
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const navigate = useNavigate()

    function handleubmit(e){
     e.preventDefault()
     axios.post("http://localhost:8081/create", {name,email})
     .then(res =>{
        console.log(res)
        navigate('/')
     }).catch(err =>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleubmit}>
                <h2>Add Students</h2>
                <div>
                <label>Name</label>
                <input type='text' placeholder='Name' className='form-control' onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                <label>Email</label>
                <input type='email' placeholder='Email' className='form-control' onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent