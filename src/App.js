import logo from './logo.svg';
import './App.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router,HashRouter, Route, Switch,Link } from "react-router-dom";
import Home from './components/Home';
import FormPage from './components/FormPage';

function App() {
  return (
    
      <HashRouter>
         {/* <header >
        <Navbar variant="light" bg="light" >
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-form"} className="nav-link">
                  form
                </Link>
              </Nav>
            </Nav>
        </Navbar>
      </header> */}
      <Switch>
      <Route exact path="/"component={FormPage} />
      <Route path="/home" component={Home} />
    </Switch>
      </HashRouter>
  
  );
}

export default App;
