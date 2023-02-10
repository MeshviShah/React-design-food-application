import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/Header.css'


export function Header() {
    return (
        <Container>
         

          <Navbar expand="xl" variant="light"  >
            <Container>
                <div className='flex-left xl'>
                <Navbar.Brand href="#" style={{"fontSize" : "2rem" , "fontFamily" : "initial"}}><b>THOS</b></Navbar.Brand> 
                </div>
                <div className='flex-right'>
                <Navbar.Brand href="#" ><b>Blog</b></Navbar.Brand>
              <Navbar.Brand href="#" ><b>Shop</b></Navbar.Brand>
              <Navbar.Brand href="#"><b>About</b></Navbar.Brand>
              <Navbar.Brand href="/contact"><b>Contact</b></Navbar.Brand>
              
                </div>
             
            </Container>
            
          </Navbar>
          
        </Container>
        
      );
}

