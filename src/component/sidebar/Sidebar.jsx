import React from 'react'
import {data} from '../../util/Data'
import side from './Sidebar.module.css'

const Sidebar = () => {
    
  return (
    <div className={side.main_side}>
      {data.map((elem,ind)=>{
        return(
        <div className={side.data} key={ind}>
            <p >{elem}</p>
        </div>
      )})}
    </div>
  )
}

export default Sidebar
