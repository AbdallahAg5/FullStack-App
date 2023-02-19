import React from 'react'
import {  ThreeCircles } from  'react-loader-spinner'
import '../style/spinner.scss'

function Loader() {
  return (
    <div className='spinner'>
 <ThreeCircles
  height="100"
  width="100"
  color="#406882"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  )
}

export default Loader