import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Submit from './pages/Submit';
import Main from './pages/Main';
import Search from './pages/Search';
import List from './pages/List';
import LatestAll from './pages/LatestAll';
import ThaiAll from './pages/ThaiAll';
import AmericanAll from './pages/AmericanAll';
import ChineseAll from './pages/ChineseAll';
import MexicanAll from './pages/MexicanAll';
import EthiopianAll from './pages/EthiopianAll';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <div className="App">
        

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/submit' element={<Submit />}/>
            <Route path='/list/:id' element={<List/>}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/latest' element={<LatestAll />}/>
            <Route path='/ethiopian' element={<EthiopianAll />}/>
            <Route path='/thai' element={<ThaiAll />}/>
            <Route path='/american' element={<AmericanAll />}/>
            <Route path='/chinese' element={<ChineseAll />}/>
            <Route path='/mexican' element={<MexicanAll />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
