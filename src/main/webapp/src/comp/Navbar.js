import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand"
                   href="/"
                   style={{color: "whitesmoke"}}
                >Postmanager</a>
            </div>
        </nav>
    );
};

export default Navbar;