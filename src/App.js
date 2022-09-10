import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { data } from './data'

function App() {
      return (
      <div className="App">
        <Navbar/>
        <Home data = {data}/>
      </div>
  );
}

export default App;
