import React from 'react'
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './Frontpage/homepage'
import Donate from './Donate/Donate'
import Signin from '../user/Signin'


export default function Pathfile () {
  return (
    <>
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element= {<Homepage/>}></Route>
                <Route path="/Donate" element= {<Donate/>}></Route>
                <Route path="/Signin" element= {<Signin/>}></Route>

               

            </Routes>
        </Router>
     </div>
    </>
    
  )
}


