import './App.css';
import { StateContext } from './store/StateContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
function App() {
  

 const router= createBrowserRouter([
    {path:'/Store',element:<Store/>},
    {path:'/About',element:<About/>},
    {path:'/',element:<Home/>}

    
  ])
  return (
    <div className="App">
      <StateContext>
     <RouterProvider router={router}/>
</StateContext>
    </div>
  );
}

export default App;
