import React, {useRef} from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-black">
            <div className="container-fluid">
                <h3 className="navbar-brand text-md-center"
                   style={{color: "whitesmoke"}}
                >Postmanager</h3>
            </div>
        </nav>
    );
};

export default Navbar;