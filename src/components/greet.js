import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export function Greet() {
    return (
        <Container>
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      );

}


