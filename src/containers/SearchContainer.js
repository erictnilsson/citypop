import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import Search from '../components/Search';
import ResultContainer from './ResultContainer';
import WithLoadingLifecycle from '../wrappers/WithLoadingLifecycle';

import { queryApi } from '../components/ApiHandler';

// Wraps the ResultContainer with a HCO handling the Loading lifecycle
const ResultsWithLifecycle = WithLoadingLifecycle(ResultContainer);

/**
 * Container for the search function and a parent to the result container. 
 */
class SearchContainer extends Component {
    constructor(props) {
        super(props);

        // state
        this.state = {
            loading: false,
            doneLoading: false,
            errorMessage: undefined,
            searchType: undefined,
            results: [],
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { searchType: props.match.params.searchType };
    }

    search(query, searchType) {
        this.setState({ loading: true });
        queryApi(query, searchType, this).then(data => this.setState({ loading: false, doneLoading: true, results: data ? data.geonames : undefined }))
            .catch(error => this.onError(error));
    }

    onSubmit = val => {
        // query the api
        this.search(val, this.state.searchType);
    }

    onError = val => {
        // abort loading sequence and set error message
        this.setState({ loading: false, doneLoading: true });
        this.setState({ errorMessage: 'Looks like something went wrong behind the scenes! See console for error log' });
        console.error(val);
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                        <h3>Search by {this.state.searchType}</h3>
                        <Search
                            onSubmit={this.onSubmit}
                            searchType={this.state.searchType}
                        />
                    </Card.Body>
                </Card>
                <ResultsWithLifecycle
                    hasError={this.state.errorMessage}
                    isLoading={this.state.loading}
                    isDoneLoading={this.state.doneLoading}
                    searchType={this.state.searchType}
                    results={this.state.results}
                />
            </div>
        );
    }
}

// export class
export default SearchContainer; 