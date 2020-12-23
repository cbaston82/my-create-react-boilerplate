import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchUsers } from './actions/userActions';

function App({ userData, fetchUsersAction }) {
    useEffect(fetchUsersAction, []);

    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <>
            <h2>List of Users</h2>
            <div>
                {
                    userData
                    && userData.users
                    && userData.users.map((user) => <p key={user.id}>{user.name}</p>)
                }
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUsersAction: () => dispatch(fetchUsers()),
});

App.propTypes = {
    fetchUsersAction: PropTypes.func,
    userData: PropTypes.object,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
