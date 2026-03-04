import React from 'react'
import png2 from './assets/png2.svg'
import text1 from './assets/text1.svg'
import text2 from './assets/text2.svg'
import text3 from './assets/text3.svg'
import './App.css'

export default function MyComponent() {
  return (
    <div className='parentcha'>   

      <div className="divv1">
        <img src={png2} alt="main" />
      </div>

      <div className="divv2">
        <div className="p1">
          <img src={text1} alt="text1" />
        </div>

        <div className="p2">
          <img src={text2} alt="text2" />
        </div>

        <div className="p3">
          <img src={text3} alt="text3" />
        </div>
      </div>

    </div>
  )
}