import React from 'react'
import createQRcode from '../createQRcodeFunction'

const RightSide = () => {
  return (
    <div className='right-side'>
      <img id="iphone-mockup" src="/img/iphone.png" alt="" />
      <canvas id='canvas'></canvas>
      <button onClick={()=>{createQRcode('canvas')}}id='generate-button'>Generate</button>
      <h2>It’s that quick and easy!</h2>
    </div>
   
  )
}

export default RightSide