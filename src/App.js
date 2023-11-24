import React from 'react'
import Slider from './layout/Slider'
import Home from './page/Home'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Slider >
        <div className='page'>
          <Home />
          <div className='bottom'>
            <p>Copyright © 2021</p>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default App
