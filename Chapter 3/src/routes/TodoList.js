import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Challenge } from '../pages/Challenge'


export const TodoList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Challenge/>}/>
    </Routes>
    </BrowserRouter>
  )
}
