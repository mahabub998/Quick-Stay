import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="container-fluid header-bg">
            <div className="header-title py-5">
                <div className="search-area">
                    <h2>LET US FIND YOU A COZY HOMESTAY</h2>
                    <div className="row">
                        <div className="search-form">
                            <input type="text" placeholder="Search a HomeStay Nearby..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;