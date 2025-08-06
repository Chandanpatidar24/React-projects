import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
     
        <nav className=' bg-black text-white px-6 py-4 text-xl '>
            <div className='flex items-center justify-between'>
              <Link to="/"
              className='text-2xl font-semibold hover:text-gray-300'
              >React Projects</Link>

              
              <div className=' space-x-7 px-8 '>
                <Link to="/easy" className=' hover:text-gray-300 '>Easy</Link>
                <Link to="/medium" className=' hover:text-gray-300 '>Medium</Link>
                <Link to="/hard" className=' hover:text-gray-300 '>Hard</Link>

              </div>
            </div>
        </nav>
    );
}
