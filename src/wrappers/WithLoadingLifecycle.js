import React, { Component } from 'react';
import ReactLoading from 'react-loading';

/**
 * HOC wrapper for handling loading animation.
 */ 
function WithLoadingLifecycle(Component) {
    return ({ hasError, isLoading, isDoneLoading, ...props }) => {
        if (hasError) {
            return (<h5>{hasError}</h5>)
        }
        if (!isLoading && isDoneLoading)
            return (<Component {...props} />);
        else if (!isLoading && !isDoneLoading)
            return (<div></div>);
        else
            // center the loading animation with a flexcontainer
            return (<div style={{
                width: '100%',
                height: '100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}><ReactLoading type={'bubbles'} color={'blue'} /> </div>);
    }
}
export default WithLoadingLifecycle; 