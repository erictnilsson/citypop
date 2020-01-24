import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
/**
 * Handles the search function and validation. Also renders the search form.
 */
class Search extends Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            query: undefined,
            validationErrorMessage: undefined,
        }
    }

    onChange = event => {
        const val = event.target.value;
        if (this.isValidInput(val))
            this.setState({ query: val });
    }

    // validate input, that it's not empty and not numerical
    isValidInput = input => {
        let error = '';
        if (!input || Number(input)) {
            error = 'Please provide a valid query';
            this.setState({ validationErrorMessage: error });
            return false;
        } else {
            error = '';
            this.setState({ validationErrorMessage: error });
            return true;
        }


    }

    onSubmit = event => {
        event.preventDefault();
        // validate input before sending it to parent component
        if (this.isValidInput(this.state.query))
            this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Control type='text' placeholder='Search for a location...' onChange={this.onChange} />
                    <p style={{ color: '#FE4A49' }}>{this.state.validationErrorMessage} </p>
                </Form.Group>
                <Form.Group>
                    <Button variant='custom search' type='submit'>
                        Search
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

// export
export default Search; 