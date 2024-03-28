import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Students() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/student/' + id);
      // Instead of reloading the page, you can remove the deleted item from the state
      setData(prevData => prevData.filter(item => item.ID !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <Link to="/createStudent" className='btn btn-success'>Add+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td><Link to={`update/${item.ID}`} className='btn btn-primary'>Edit</Link></td>
                <td><button type="button" className='btn btn-primary ms-2' onClick={e => handleDelete(item.ID)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
