
import React, { useEffect, useState } from 'react';
import './Second.css'
import FakeData from '../../FakeData/FakeData.json'
import img from '../../../images/quickStay2.png'

const Second = () => {
    const [secondData, setSecondData] = useState([]);

    useEffect(() => {
        setSecondData(FakeData);
    }, [])
    const filteredData = secondData.filter((data) => data.category === "Second");
    console.log(filteredData)

    return (
        <div className="row py-5">
            <div className="col-md-3">
                <img src={img} alt="" />
            </div>
            <div className="col-md-9">
                <div className="row service-items">
                    {
                        filteredData.map(data =>
                            <div className="col-md-4 d-flex items justify-content-center align-items-center">
                                <div className="card-items">
                                    <img src={data.Image} className="" alt="Responsive image"></img>
                                    <h4 className="mt-3">{data.name}</h4>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Second;