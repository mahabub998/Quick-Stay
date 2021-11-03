import React from 'react';
import './WeOffered.css'
import image1 from '../../images/quickStay1.png'
import OfferData from '../FakeData/OfferData.json'

const WeOffered = () => {
    return (
        <div className="row py-5">
            <div className="col-md-3">
                <img src={image1} alt="" />
            </div>
            <div className="col-md-9 container">
                <div className="row">
                    {
                        OfferData.map((offer, index) => {
                            return (
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <div className="offerData">
                                        <img src={offer.Image} alt="" />
                                        <h1>{offer.title}</h1>
                                        <p className="text-center">{offer.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WeOffered;