
import React from 'react'
import ComponentB from './ComponentB'
import { useState,createContext } from 'react'

//PROVIDER COMPONENT
//1)import {createContext} from  'react';
// 2) export const MyContext = createContext();
// 3) <MyContext.Provider value={value}>
//      <Child/>
//    <MyConttext.Provider>


// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();

function ComponentA() {

    // eslint-disable-next-line no-unused-vars
    const [user, userSet] = useState("Umut");


  return (
      <div className='box'>
          ComponentA
          <MyContext.Provider value={user}>
              <ComponentB/>
          </MyContext.Provider>
          
      </div>
  )
}

export default ComponentA