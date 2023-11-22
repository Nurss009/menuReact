import React from "react";
import {Link} from "react-router-dom";

const Heder = () => {
    return (
        <div>
            <header>
                <Link to={'/'}>Home</Link>
                <Link to={'/search'}>Search</Link>
            </header>
        </div>
    );
};

export default Heder;