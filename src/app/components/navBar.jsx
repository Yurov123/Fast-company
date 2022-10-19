import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar bg-light mb-2'>
            <div className='container-fluid'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link active'  to="/">Main</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link '  to="/users">Users</Link>
                    </li>
                </ul>
                <div className='d-flex'>
                    <Link className='nav-link' to='/login'>Login</Link>
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;