import React from 'react'
import ComponentC from './ComponentC'
function ComponentB() {
  return (
          <div className='box'>
          ComponentB
            <ComponentC/>
         </div>
  )
}

export default ComponentB