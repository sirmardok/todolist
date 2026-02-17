import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListTaskComponent from './components/ListTaskComponent'
import TaskComponent from './components/TaskComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />      
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={ <ListTaskComponent /> }></Route>
          {/* http://localhost:8080/tasks */}
          <Route path='/tasks' element={ <ListTaskComponent /> }></Route>
          {/* http://localhost:8080/add-task */}
          <Route path='/add-task' element={ <TaskComponent /> }></Route>
          {/* http://localhost:8080/update-task/1 */}
          <Route path='/update-task/:id' element={ <TaskComponent /> }></Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>  
    </>
  )
}

export default App
