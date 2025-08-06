// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

import Easy from './pages/Easy';
import Medium from './pages/Medium';
import Hard from './pages/Hard';

// Easy Projects
import Counter from './Projects/Easy/counter/Counter';
import TodoApp from './Projects/Easy/Todo/Todo'

export default function AppRouter() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/easy' element={<Easy />} />
                <Route path='/medium' element={<Medium />} />
                <Route path='/hard' element={<Hard />} />


                <Route path='/easy/counter' element={<Counter />} />
                <Route path='/easy/todo' element={<TodoApp />} />


            </Routes>
            
        </>
    );
}
