import React from 'react';
import { Link } from 'gatsby';

const Navegation = () => {
    return ( 
        <nav>
            <Link to={'/'}>Start</Link>
            <Link to={'/we'}>We</Link>
        </nav>
     );
}
 
export default Navegation;