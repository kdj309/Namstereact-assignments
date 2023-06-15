import React,{useEffect, useState} from 'react'
import { restrodata } from '../utils/mockData'
let initialrender=true
function Topbar({setRestroTorender}) {
    const [searchVal, setSearchVal] = useState("")
    useEffect(() => {
        if (initialrender) {
            return
        }
      
      let timerid=setTimeout(() => {
        let filteredRestro=restrodata.filter((restroitem)=>{
            return restroitem.data.name.includes(searchVal)
          })
        setRestroTorender(filteredRestro)
      }, 1000);
      return () => {
        clearTimeout(timerid)
      }
    }, [searchVal])
    
  return (
    <div className='topbarcontainer'>
        <div>
            <input value={searchVal} placeholder='Search for restaurants' type="search" onChange={(e)=>{
                initialrender=false;
               
                setSearchVal(e.target.value);
                }} name="" id="" />
        </div>
    </div>
  )
}

export default Topbar