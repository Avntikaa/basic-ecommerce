import './App.css';
import HeaderSummary from './components/HeaderSummary'
import Header from './components/Header'
import ShowData from './components/ShowData';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
<HeaderSummary/>
<ShowData/>
<Footer/>
    </div>
  );
}

export default App;
