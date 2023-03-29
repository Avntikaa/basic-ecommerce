import './App.css';
import HeaderSummary from './components/HeaderSummary'
import Header from './components/Header'
import ShowData from './components/ShowData';
import Footer from './components/Footer';
import { StateContext } from './store/StateContext';
function App() {
  return (
    <div className="App">
      <StateContext>
     <Header/>
<HeaderSummary/>
<ShowData/>
<Footer/>
</StateContext>
    </div>
  );
}

export default App;
