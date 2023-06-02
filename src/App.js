import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navibar';
import Pathfile from './pages/Pathfile';
import Homepage from './pages/Frontpage/homepage';



function App() {
  return (
    <>
     <div className="App">
      <NavScrollExample/>
    </div>
    <div>
      <Pathfile/>
    </div>  
     
    
    </>
   
  );
}

export default App;
