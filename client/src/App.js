import logo from './logo.svg';
import './App.css';
import SimplePage from './components/simplePage.js'
import SimplePage1 from './components/simplePage1.js'
import SimplePage2 from './components/simplePage2.js'
import FormUser from './components/FormUser.js'
import { Button,Navbar ,Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
   <Router>
              <div>
              <h1>TEST ARSELA </h1>
              <Navbar bg="dark" variant="dark">

    <Nav className="mr-auto">
    <Nav.Link href="/simplePage">ARTICLE1</Nav.Link>
    <Nav.Link href="/simplePage1">ARTICLE2</Nav.Link>
    <Nav.Link href="/simplePage2">ARTICLE3</Nav.Link>
      <Nav.Link href="/form">FORM USER</Nav.Link>
    </Nav>
   
  </Navbar>

                
  <Route path="/simplePage" component={SimplePage} />
  <Route path="/simplePage1" component={SimplePage1} />
  <Route path="/simplePage2" component={SimplePage2} />
  <Route path="/form" component={FormUser} />
              </div>
        </Router>
   
    </div>
  );
}

export default App;
