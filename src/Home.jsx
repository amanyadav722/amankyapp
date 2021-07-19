import React from 'react';
//import { NavLink } from 'react-router-dom';
import Common from './Common';
import web from './images/web4.png';

const Home = () => {
    return (
        <>
        <Common  
           name="Visit my site and get ideas to grow your business with"
           imgsrc={web}
           visit="/service"
           btname="Get Started"
           />
        </>
    );
};

export default Home;
