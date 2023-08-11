import './App.css';
import { lazy, Suspense } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Loading from './components/Loading';

const Submit = lazy(()=> import('./pages/Submit'))
const Main = lazy(()=> import('./pages/Main'))
const Search = lazy(()=> import('./pages/Search'))
const List = lazy(()=> import('./pages/List'))
const LatestAll = lazy(()=> import('./pages/LatestAll'))
const ThaiAll = lazy(()=> import('./pages/ThaiAll'))
const AmericanAll = lazy(()=> import('./pages/AmericanAll'))
const ChineseAll = lazy(()=> import('./pages/ChineseAll'))
const MexicanAll = lazy(()=> import('./pages/MexicanAll'))
const EthiopianAll = lazy(()=> import('./pages/EthiopianAll'))
const About = lazy(()=> import('./pages/About'))
const Contact = lazy(()=> import('./pages/Contact'))

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
