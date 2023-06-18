import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './logo1.jpeg';
import logo2 from './logo2.png';
import sign from './sign.jpeg';
import './navibar.css'
                


function NavScrollExample() {
  return (
    <Navbar  expand="lg" style={{height: '100px'}} >
      <Container fluid>
      <div style={{ display: 'flex', gap: '10px' }}>
      <div style={{ padding: '1px' }}><img
            src={logo2}
            alt="Logo"
            width="100"
            height="100"
            className="d-inline-block align-top"
          /></div>

           <div style={{ padding:'1px'}}>
           { <Navbar.Brand href="/">
      
            <img
              src= {logo1}
              width="60"
              height="100"
              // className="d-inline-block align-top"
              className="d-inline-block align-top hover-icon"
              alt="React Bootstrap logo"
              padding='10px'
              
            />
         
            </Navbar.Brand> }</div>
            </div>
          
            <div style={{ display: 'flex', gap: '30px' }}>
              <Nav.Link href="/" className='TextH1'>Home</Nav.Link>

              {/* dropdown for about us */}
              <NavDropdown title="About us" id="navbarScrollingDropdown1" className='TextH1'> 
              <NavDropdown.Item href="#action1">About us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">Our Network </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Our People </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">Contact </NavDropdown.Item>
              </NavDropdown>

              {/* dropdown for Events */}
              <NavDropdown title="Events" id="navbarScrollingDropdown2"className='TextH1'> 
              <NavDropdown.Item href="#action5">What We Do</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Upcomming Events </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Past Events </NavDropdown.Item>
              
              </NavDropdown>
             

              {/* dropdown for Meetings */}
              <NavDropdown title="Meetings" id="navbarScrollingDropdown3"className='TextH1'> 
              <NavDropdown.Item href="#action8">Upcomming Meetings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">Past Meetings</NavDropdown.Item>
              
              </NavDropdown>
             
              
              {/* dropdown for News and Policies */}
              <NavDropdown title="News" id="navbarScrollingDropdown4" className='TextH1'> 
              <NavDropdown.Item href="#action11">News </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action12">Policies</NavDropdown.Item>
             
              </NavDropdown>


              {/* link for our impacts*/}

              <Nav.Link href="#action10" className='TextH1'>Our impact</Nav.Link>

             {/* link for our support us */}
             <Nav.Link href="#action11" className='TextH1'>Spport us</Nav.Link>


              </div>
             
              <div style={{ display: 'flex', gap: '10px' }}>
             <Form className="d-flex" >
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
             <div style={{ padding: '10px' }} className='TextH2'><Button variant="outline-success" style={{ border: '2px solid green' }} >
             <Nav.Link href="/Member_1">Become a Member</Nav.Link></Button></div>
             <div style={{ padding: '10px' } } className='TextH2'><Button variant="outline-success" style={{ border: '2px solid green' }}> 
             <Nav.Link href="/Donate">Donate</Nav.Link></Button></div>
             
          </Form>
         
          <div style={{ padding:'20px' }}>
           { <Navbar.Brand href="/Login">
      
            <img
              src= {sign}
              width="30"
              height="30"
              className="d-inline-block align-top"
              
              alt="React Bootstrap logo"
              padding='10px'
              
              
            />
         
            </Navbar.Brand> }</div></div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;