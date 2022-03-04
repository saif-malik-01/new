import {Container,Row,Col} from 'react-bootstrap';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
       <Container fluid={true}>
         <Row>
           <Col className="nav-col">
             <Navbar/>
           </Col>
           <Col xs={8}>
             col2
           </Col>
           <Col>
             col3
           </Col>
         </Row>
       </Container>
    );
}

export default App;
