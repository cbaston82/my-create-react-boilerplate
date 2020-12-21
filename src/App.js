import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import exampleAction from './actions/exampleAction';
import HomeComponent from './components/home/HomeComponent';

class App extends Component {
    exampleAction = () => {
        this.props.exampleAction();
    }

    render() {
        return (
            <div className="App">
                <HomeComponent />
                <button onClick={this.exampleAction}>Test redux action</button>
                <pre>
                    {
                        JSON.stringify(this.props)
                    }
                </pre>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
    exampleAction: () => dispatch(exampleAction()),
});

App.propTypes = {
    exampleAction: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
