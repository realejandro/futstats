import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../playerapp';
import PlayersList from '../components/PlayersList';
import { TestComponent } from '../testing/TestComponent';
import { TestApi } from '../testing/TestApi';
import { BlogPage } from '../playerapp/pages/BlogPage';
import { ContactPage } from '../playerapp/pages/ContactPage';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='test'element={<TestComponent /> } />
        <Route path='blog'element={<BlogPage /> } />
        <Route path='contact'element={<ContactPage /> } />
        <Route path='players' element = {<PlayersList /> } />
        <Route path='test-api' element={<TestApi /> } /> 
    </Routes>
  )
}
