import React from 'react'
import '../css/Home.css'

const Home = ({data}) => {
  return (
    <div className='home-container'>
        Rendering home page...
        {/* {data.map((d)=>{
            return (
                <div>
                    <h1>{d.name}</h1>
                </div>
            )
        })} */}
    </div>
  )
}

export default Home