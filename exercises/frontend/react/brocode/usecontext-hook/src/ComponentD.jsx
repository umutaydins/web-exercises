import React,{useContext} from 'react'

//CONSUMER COMPONENTS
// 1. import React, {userContext} from 'react';
//    import {MyContext} from './ComponentA';
//2/ const value = useContext(MyContext);
import {MyContext} from './ComponentA.jsx'
function ComponentD() {

 const value = useContext(MyContext);


  return (
      <div className='box'>
          
          ComponentD
          <br />
          {value}
      </div>
  )
}

export default ComponentD