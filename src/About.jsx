import React from 'react';
import Common from './Common';
import web from './images/web3.jpeg';

const About = () => {
    return (
        <>
        <div>
           <Common  
           name="Welcome to About page!"
           imgsrc={web}
           visit="/contact"
           btname="Contact Now"
           />
        </div>
        </>
    )
}

export default About;
