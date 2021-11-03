import React from 'react';
import './LocationPart.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationData from '../FakeData/LocationData.json'

const LocationPart = () => {
    console.log(LocationData);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        MidTablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (

        <div className="row">
            <div className="col-md-3">
                <div className="title text-center">
                    <h1>Find <br /> QuickStay <br /> in</h1>
                </div>
            </div>
            <div className="col-md-9">
                <div className="container-fluid px-lg-5 pb-5">
                    {LocationData &&
                        <Carousel responsive={responsive}>
                            {LocationData.map((item, index) => {
                                return (
                                    <div key={item?.id} className="slider-box m-2 p-3 row" >
                                        <div className="col-md-2 d-flex location-card justify-content-center align-items-center">
                                            <div className="card-item">
                                                <img src={item?.image} alt="img-fluid" />
                                                <h5>{item?.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    }
                </div>
            </div>

        </div>

    );
};

export default LocationPart;