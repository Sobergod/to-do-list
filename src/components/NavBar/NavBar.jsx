import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
class NavBar extends React.Component {
    render() {
        return (
            <ul className='navbar-wrap'>
                <li>
                    <Link className='navBtn' to='/'>主页</Link>
                </li>
                <li>
                    <Link className='navBtn' to='/finish'>已经完成</Link>
                </li>
            </ul>
        )
    }
}
export default NavBar