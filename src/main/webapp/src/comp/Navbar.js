import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <p className="navbar-item">
                    <img src="https://www.logolynx.com/images/logolynx/c2/c26ce7049f69095859336e866f22f709.png"
                         alt="post manager"
                         width="80"
                         height="50"/>Postmanager
                </p>
            </div>
        </nav>
    );
};

export default Navbar;