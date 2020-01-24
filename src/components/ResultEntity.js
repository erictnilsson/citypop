import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

/**
 * Renders either a a accordion-list of cards, or a single card depending on the props.type.
 * @param {*} props Type of entity that is to be rendered
 */
function ResultEntity(props) {

    const country = () => {
        return (
            <div>
                {props.results.map((result, index) => (
                    <Accordion key={index}>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                                    <Card.Title>{result.name}, {result.countryName}</Card.Title>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey='0'>
                                <Card.Body>
                                    <Card.Title>Population: {result.population}</Card.Title>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))}
            </div>);
    }

    const city = () => {
        return (
            <div>
                {props.results.map((result, index) => (
                    <Card key={index}>
                        <Card.Header>
                            <Card.Title>{result.name}, {result.countryName}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Population: {result.population}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    }

    if (props.type === 'country') {
        return country();
    } else if (props.type === 'city') {
        return city();
    }
}

export default ResultEntity;