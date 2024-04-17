import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './layout/Home';
import Pokemon from './layout/Pokemon';
import Menu from './components/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/pokemon' element={<Pokemon/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App