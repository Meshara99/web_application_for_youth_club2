import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navibar';
import Footer from './components/Footer';

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
    <div> <Footer />
    </div>
   
     
    
    </>
   
  );
}

export default App;
