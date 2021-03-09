import React from 'react'
import './App.css';
import About from './About';
import Contact from './Contact';
import Cont2 from './Cont2';
import Users from './Users';
import logo from './logo.svg';
import CreateUser from './CreateUser';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact"><Link to="/list">User List</Link></Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact"><Link to="/create">Create User</Link></Link></Nav.Link>
          </Nav>
        </Navbar>
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

        <h1>Heeloow from My Reaact</h1>

        <About sname="shah" />
        <Contact fathername="kalpesh" />
        <Cont2 />
        <Users></Users>
        <CreateUser />
    </div>
  );
}

export default App;