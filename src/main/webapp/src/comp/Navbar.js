import React from 'react';

const Navbar = () => {
    return (
        <nav
            className="navbar justify-content-between">
            <div className="navbar-content">
                <button className="btn" type="button">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    Menu
                </button>
            </div>
            <a href="#" className="navbar-brand">
                <img src="https://i.pinimg.com/originals/19/d5/50/19d550f48591d9abf0d03ba93b42271c.jpg"
                     alt="..."
                     width={60}
                />
            </a>
            <div className="navbar-content">
                <button className="btn btn-primary" type="button">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;