import React, { createContext, useState } from 'react'
import {data} from '../mock/data'
export const Flower = createContext()
 const FlowersProvider = ({children}) => {
  const [flow, setFlow]=useState(data)
  
    return (
    <Flower.Provider value={[flow, setFlow]}>{children}</Flower.Provider>
  )
}
export default FlowersProvider
