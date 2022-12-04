import React, {useRef} from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <h3 className="navbar-brand text-center"
                   style={{color: "whitesmoke"}}
                >Postmanager</h3>
            </div>
        </nav>
    );
};

export default Navbar;