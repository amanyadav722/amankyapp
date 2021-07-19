import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Services = () => {
    return (
        <>
        <div className="my-5">
           <h1 className="tab-center text-center">Our Services!</h1> 
        </div>
        <div className="conatiner-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">

                        {
                            Sdata.map((val, ind) => {
                                return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                details={val.details}
                                />
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Services;
