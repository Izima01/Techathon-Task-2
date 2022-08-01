import {Flex, Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import SharedLayout from './Components/SharedLayout'
import Dashboard from './Components/Dashboard'
import Error from './Components/Error'

// React Toastify Imports
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {
  return (
    <Box >
      <Routes>
        <Route path={'/'} element={<SharedLayout />} >
          <Route index element={<Register />} />
          <Route path={'login'} element={<Login />} />
          <Route element={<ProtectedRoutes />} > 
            <Route path={'dashboard'} element={<Dashboard />} />
          </Route>
          <Route path={'*'} element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer autoclose={1500} position={'top-left'} newestOnTop={true} style={{ minHeight:'40px' }} />
    </Box>
  )
}

export default App
