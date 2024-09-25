import React, { useEffect, useState } from 'react'
import MemeCard from '../components/Card'
import { getAllMemes } from '../api/memes'
function HomePage() {

  const [data, setData] = useState([]);

  useEffect(() =>{
    getAllMemes().then(memes => setData(memes.data.memes));
  },[])
  return (
    <div style={{display: 'flex', flexWrap: 'wrap',justifyContent:'center', alignItems:'center'}}>
      {
        data.map(el => <MemeCard img ={el.url} title = {el.name}/>)
      }
    </div>
  )
}

export default HomePage