import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/service" component={Services} />
           <Route exact path="/contact" component={Contact} />
           <Redirect to="/" />
        </Switch>
        <br></br><br></br><hr/>
        <Footer />
        </>
    );

};

export default App;
