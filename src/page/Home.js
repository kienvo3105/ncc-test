import React from 'react'
import logo from '../public/assets/logoNCC 1.png'
import './Home.css'
import html from '../public/assets/html-icon 1.png'
import css from '../public/assets/css-icon 1.png'
import url from '../public/assets/url-icon 1.png'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='logo-container'>
                <img src={logo} alt='logo' style={{ height: '100px', width: '288px' }} />
            </div>
            <div className='middle'>
                <p className='text question'>Lorem ipsum dolor sit asmet?</p>
                <p className='text answer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div className='content-section'>
                <div className='content-container'>
                    <p className='title'>Lorem ipsum dolor sit amet</p>
                    <div className="image-with-text">
                        <img src={html} alt='html' style={{ width: '128px', height: '128px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.  </p>
                    </div>
                </div>
                <div className='content-container'>
                    <p className='title'>Lorem ipsum dolor sit amet</p>
                    <div className="image-with-text">
                        <img src={css} alt='css' style={{ width: '128px', height: '128px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.  </p>
                    </div>
                </div>
                <div className='content-container'>
                    <p className='title'>Lorem ipsum dolor sit amet</p>
                    <div className="image-with-text">
                        <img src={url} alt='url' style={{ width: '128px', height: '128px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.  </p>
                    </div>
                </div>
            </div>
            {/* <div className='bottom'>
                <p>Copyright © 2021</p>
            </div> */}
        </div>
    )
}

export default Home;
