import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home'
import List from './pages/List'
import Products from './components/Main/Products/Products'

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
            <Route path="/List" element={<List />} />
            <Route path="/List/Detail/:id" element={<Products />} />
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)

export default AppRouter