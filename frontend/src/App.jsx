import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {Signup}  from '../pages/Signup'
import {Signin} from '../pages/Signin'
import { Dashboard } from "../pages/Dashboard";
import { SendMoney } from "../pages/SendMoney";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
