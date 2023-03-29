import './App.css';
import { StateContext } from './store/StateContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  

 const router= createBrowserRouter([
    {path:'/',element:<Home/>},{
      path:'/About',element:<About/>
    }
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
