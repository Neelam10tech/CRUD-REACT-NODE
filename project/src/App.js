import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Students from './Students'
import CreateStudent from './CreateStudent'
import UpdateStudent from './UpdateStudent'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Students/>}/>
      <Route path='/createStudent' element={<CreateStudent/>}/>
      <Route path='/update/:id' element={<UpdateStudent/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App