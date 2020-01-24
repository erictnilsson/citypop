import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

/**
 * Container for the home page.
 */
function HomeContainer() {
    return (
        <div>
            <Form>
                <Card>
                    <Card.Body>
                        <Form.Group>
                            <h3>Search By:</h3>
                            <Link to='/search/country'>
                                <Button variant='custom secondary'>Country</Button>
                            </Link>
                            <Link to='/search/city'>
                                <Button variant='custom secondary'>City</Button>
                            </Link>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
        </div >
    );
}

// export
export default HomeContainer; 