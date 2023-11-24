import React from 'react'
import '../App.css'

const Slider = ({ children }) => {
    const currentPath = window.location.pathname;
    return (
        <div className='menu-container'>
            {console.log(children)}
            <nav className='menu'>
                <ul>
                    <li>
                        <a className={`fas fa-home ${currentPath === '/' ? 'active' : ''}`} href="/">Home</a>
                    </li>
                    <li>
                        <a className={`fas fa-services ${currentPath === '/services' ? 'active' : ''}`} href="/services">Services</a>
                    </li>
                    <li>
                        <a className={`fas fa-news ${currentPath === '/news' ? 'active' : ''}`} href="/news">News</a>
                    </li>
                    <li>
                        <a className={`fas fa-blog ${currentPath === '/blog' ? 'active' : ''}`} href="/blog">Blog</a>
                    </li>
                    <li>
                        <a className={`fas fa-contact ${currentPath === '/contact' ? 'active' : ''}`} href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div style={{ flex: 1, paddingLeft: '150px' }}>{children}</div>
        </div>
    )
}

export default Slider
