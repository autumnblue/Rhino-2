import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SessionActions from '../../actions/sessions';

class Logout extends Component {
    componentWillMount() {
        this.props.userLogoutRequest();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  email: state.sessions.email,
  password: state.sessions.password,
});

const mapDispatchToProps = (dispatch) => ({
  userLoginRequest: (data) => dispatch(SessionActions.userLoginRequest(data)),
  userLogoutRequest: () => dispatch(SessionActions.userLogoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
