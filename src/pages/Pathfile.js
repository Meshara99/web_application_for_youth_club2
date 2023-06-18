import React from 'react'
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from './Frontpage/homepage'
import Donate from './Donate/Donate'
import Signin from '../user/Signin'
import Member_1 from './Member/Member_1'
import Login from '../user/Login'
import Member_2 from './Member/Member_2'


export default function Pathfile () {
  return (
    <>
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element= {<Homepage/>}></Route>
                <Route path="/Donate" element= {<Donate/>}></Route>
                <Route path="/Signin" element= {<Signin/>}></Route>
                <Route path="/Member_1" element= {<Member_1/>}></Route>
                <Route path="/Login" element= {<Login/>}></Route>
                <Route path="/Member_1/Member_2" element= {<Member_2/>}></Route>
            </Routes>
        </Router>
     </div>
    </>
    
  )
}


