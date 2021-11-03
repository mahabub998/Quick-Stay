import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import user1 from '../../images/user.png'
import './User.css'

const allUser = [
    {
        id: 1,
        name: "Mark Zuckerberg",
        Image: "https://i.ibb.co/hWjKs7H/mark-zuckerberg.jpg",
        feedback: "Say bye bye to heavy brokerage",

    },
    {
        id: 2,
        name: "Bill Gates",
        Image: "https://i.ibb.co/T18pXPz/Bill-Gates.jpg",
        feedback: "No need to wander around in search of a PG",

    },
    {
        id: 3,
        name: "Elon Musk",
        Image: "https://i.ibb.co/phVndRY/Elon-Musk.jpg",
        feedback: "Get cozy with already in installed furniture",

    },
    {
        id: 4,
        name: "Elon Musk",
        Image: "https://i.ibb.co/phVndRY/Elon-Musk.jpg",
        feedback: "Get cozy with already in installed furniture",

    },
    {
        id: 5,
        name: "Elon Musk",
        Image: "https://i.ibb.co/phVndRY/Elon-Musk.jpg",
        feedback: "Get cozy with already in installed furniture",

    },
    {
        id: 6,
        name: "Elon Musk",
        Image: "https://i.ibb.co/phVndRY/Elon-Musk.jpg",
        feedback: "Get cozy with already in installed furniture",

    }

]

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(allUser)
    }, [])

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
            items: 3
        },
        MidTablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <div className="row  py-5">
            <div className="col-md-3">
                <img src={user1} alt="" />
            </div>
            <div className="col-md-9 container">
                {users &&
                    <Carousel responsive={responsive}>
                        {users.map((user, index) => {
                            return (
                                <div className="row">
                                    <div key={user?.id} className="userCard d-flex" >
                                        <div className="userInfo  justify-content-center align-items-center">
                                            <div className="imgArea d-flex ">
                                                < img src={user?.Image} alt="" />
                                            </div>
                                            <div className="info-area text-center pt-3">
                                                <h5>{user?.name}</h5>
                                                <p>{user?.feedback}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                }
            </div >
        </div >


    );
};

export default User;