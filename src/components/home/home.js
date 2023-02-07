import {Header} from "./header"
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import '../../assets/Home.css'
import food from "../../assets/images/one.avif"
import food2 from "../../assets/images/two.avif"
import food3 from "../../assets/images/four.avif"
import food4 from "../../assets/images/five.avif"
import food5 from "../../assets/images/six.avif"
import food6 from "../../assets/images/seven.avif"
import book from "../../assets/images/three.avif"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Footer} from "../home/footer"

function Home(){
    
        
        return (
          <div>
              <Header />
              <div> 
              <div className="main-com">          
                <p><b>My  culinary  journey <br>
                </br>from A to Z</b></p>
                
              </div>
              <p className="main-com2">Join me for daily reflections and delicious recipes</p>       
          </div>
          <Container>
      <Row style={{"marginTop" : "6rem"}}>
        <Col> <img src={food}  alt="img-1" style={{"width" : "92%"}} /><p className="con-1"><b>Hot-cross buns and Easter fun</b></p></Col>
        <Col><img src={food2}  alt="img-1" style={{"width" : "92%"}} /><p><b>Teasty and Healthy Snackes For road</b></p></Col>
      </Row>
      <Row style={{"marginTop" : "3rem"}}>
        <Col> <img src={food}  alt="img-1" style={{"width" : "92%"}} /><p className="con-1"><b>Hot-cross buns and Easter fun</b></p></Col>
        <Col><img src={food2}  alt="img-1" style={{"width" : "92%"}} /><p><b>Teasty and Healthy Snackes For road</b></p></Col>
      </Row>
    </Container>
          <div className="mb-2">
          <Button variant="secondary" size="lg" style={{"marginTop" : "3rem"}}>
          <className style={{"padding" : "3rem"}}>More Articals</className>
        </Button>
          </div>
           
           <div className="section2">
           <Container>
      
      <Row style={{"marginBottom" : "10rem"}}>
        <Col ><p style={{"marginTop" : "10rem","fontSize":"3rem"}}>It’s official: The <br></br>   
         best of Thos</p>
         <p style={{"fontSize":"1.1rem" ,"marginTop" : "2rem"}}>You asked, we delivered. Thos’ best 100 recipes are now available as a hardback and we deliver worldwide!</p>
         <div className="mb-2">
          <Button variant="secondary" size="lg" style={{"marginTop" : "3rem"}}>
          <className style={{"padding" : "2rem"}}>GO TO SHOP</className>
        </Button>
          </div>
</Col>
        <Col style={{"marginTop" : "5rem"}}> <img src={book}  alt="img-1"  /></Col>
       
      </Row>
    </Container>
    
           </div>
           <div className="main-com" style={{"marginBottom" : "5rem"}}>          
                <p>Follow on Instagram @Thos </p>
               
              </div>
              <Container fluid="md" style={{"marginBottom" : "5rem"}}>
                  <Row>
                    <Col> <img src={food3}  alt="img-1" style={{"width" : "92%"}} /></Col>
                    <Col> <img src={food4}  alt="img-1" style={{"width" : "92%"}} /></Col>
                    <Col> <img src={food5}  alt="img-1" style={{"width" : "92%"}} /></Col>
                    <Col> <img src={food6}  alt="img-1" style={{"width" : "92%"}} /></Col>
                  </Row>
                </Container>
         <Footer />
          </div>    
          );
        }

export default Home