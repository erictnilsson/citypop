import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ResultEntity from '../components/ResultEntity';

/**
 * Container for the result-list
 */
class ResultContainer extends Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            searchType: undefined,
            results: [],
        };
    }

    static getDerivedStateFromProps(props, state) {
        return {
            searchType: props.searchType,
            results: props.results
        };
    }

    renderEntity(searchType, results) {
        return (
            <Card style={{ marginTop: 2 + 'em' }}>
                <Card.Body>
                    <h3>Results</h3>
                    <ResultEntity style={{ marginTop: 1 + 'em' }}
                        type={searchType}
                        results={results}
                    />
                </Card.Body>
            </Card >);
    }

    render() {
        if (this.state.results && this.state.results.length > 0) {
            return this.renderEntity(this.state.searchType, this.state.results);
        } else
            return (
                <Card style={{ marginTop: 2 + 'em'}}>
                    <Card.Body>
                        <h5>Oops! Looks like we couldn't find anything for that query</h5>
                    </Card.Body>
                </Card >
            );
    }
}

// export
export default ResultContainer; 