import { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Loader from "./components/Loader";
import { data } from './data';

function App() {

      const [isLoading, setIsloading]=useState(true);

      useEffect(()=> {
        setTimeout(()=> {
          setIsloading(false)
        }, 3000)
      })

      if(isLoading){
        return <Loader/>
      }
      return (
      <div className="App">
        <Navbar/>
        <Home data = {data}/>
      </div>
  );
}

export default App;
