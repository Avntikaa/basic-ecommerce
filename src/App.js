import './App.css';
import { useStateContext } from './store/StateContext';
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Contact from './pages/Contact';
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
function App() {
  const cxt=useStateContext();

 
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact
         element={ <Home />}/>
        <Route path='/About' exact
         element={ <About />}
          // {cxt.isLogin && <Navigate to='/profile'/>}
        />
        <Route path='/Store' exact
         element={<>{cxt.isLogin && <Store/>}{!cxt.isLogin && <Navigate to='/Login'/>}</>}
         />
        <Route path='/Contact' exact
        element={<Contact/>}
        />
           <Route path='/Login' exact
          element={<>{!cxt.isLogin && <Login/>} {cxt.isLogin && <Navigate to='/Store'/>}</>}
          />
          <Route path='/Store/:id' exact
          element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
