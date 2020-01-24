import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

/**
 * Renders the CityPop header.
 */
class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <Button variant='custom primary' style={{ float: 'left', marginRight: -4 + 'em' }}>Home</Button>
                </Link>
                <h1>CityPop</h1>
            </div>
        );
    }
}

// export
export default Header; 