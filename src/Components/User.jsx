import React from 'react'
import Attendence from './Attendence'
const User = () => {
  return (
    <div className='flex gap-4  '>
      <div>
      <h1>Adithya</h1>
    <h1>2300031037</h1>
    <h1>CSE</h1>
    <Attendence />
      </div>
   <div>
   <h1>Arsha</h1>
    <h1>2300031000</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
   <div>
   <h1>Jeswanthy</h1>
    <h1>2300030084</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
   <div>
   <h1>Vishnu</h1>
    <h1>2300031042</h1>
    <h1>CSE</h1>
    <Attendence />
   </div>
    </div>
  )
}

export default User
