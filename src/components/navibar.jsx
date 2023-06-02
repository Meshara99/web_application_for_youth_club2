import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './logo1.jpeg';
import logo2 from './logo2.png';
import sign from './sign.jpeg';


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
           { <Navbar.Brand href="#home">
      
            <img
              src= {logo1}
              width="60"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              padding='10px'
              
              
            />
         
            </Navbar.Brand> }</div>
            </div>
          
            <div style={{ display: 'flex', gap: '30px' }}>
            <Nav.Link href="/">Home</Nav.Link>
          
            <Nav.Link href="#action2">About us</Nav.Link>

              <NavDropdown title="Services" id="navbarScrollingDropdown"> 
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action6">Meetings</Nav.Link>
             
              <Nav.Link href="#action7">Our impact</Nav.Link>
              <Nav.Link href="#action8">Support us</Nav.Link>
              </div>
             
              <div style={{ display: 'flex', gap: '10px' }}>
             <Form className="d-flex" >
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
             <div style={{ padding: '10px' }}><Button variant="outline-success" >
              Become a Member</Button></div>
             <div style={{ padding: '10px' }}><Button variant="outline-success"> 
             <Nav.Link href="/Donate">Donate</Nav.Link></Button></div>
             
          </Form>
         
          <div style={{ padding:'10px'}}>
           { <Navbar.Brand href="/Signin">
      
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