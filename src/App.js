// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'


import Home from './components/home';
import Teammatch from './components/teamMatch';

function App() {



  return (
    <div>
      <Routes>
      
        <Route path='/' element={<Home />}/>
        <Route path='/teammatch/:id' element={<Teammatch />} />
      </Routes>
    </div>
  );
}


export default App;
