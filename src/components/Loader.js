import React from 'react'
import logo from "../assets/winnerslogo.png";
import loader from '../assets/loading.gif'


const Loader = () => {
  return (
    <div style={{textAlign: 'center', marginTop: '200px'}}>
        <img src={logo} alt="" width='150px'style={{display: 'block', margin: 'auto'}}/>
        <img src={loader} alt="loading" width='60px'style={{display: 'block', margin: 'auto'}}/>
    </div>
  )
}

export default Loader;