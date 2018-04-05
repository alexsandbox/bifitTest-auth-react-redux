import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginFormBootsrtap from '../components/LoginFormBootstrap';
import * as actions from '../actions/Actions';

const Login = ({
  onSubmit,
  onChange,
  errors,
  user,
  submitDisabled,
}) => (
  <LoginFormBootsrtap
    onSubmit={onSubmit}
    onChange={onChange}
    errors={errors}
    user={user}
    submitDisabled={submitDisabled}
  />
);

const mapStateToProps = state => ({
  errors: state.login.errors,
  user: state.login.user,
  submitDisabled: state.login.submitDisabled,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange(event) {
    dispatch(actions.loginChangeUser({ [event.target.name]: event.target.value }));
  },
  onSubmit(event, user) {
    event.preventDefault();
    const errors = {};
    let isFormValid = true;
    if (user.name.length < 4) {
      errors.name = 'Логин должен иметь как минимум 4 символа';
      isFormValid = false;
    }
    if (user.password.length < 8) {
      errors.password = 'Пароль должен иметь как минимум 8 символов';
      isFormValid = false;
    }
    if (!isFormValid) {
      dispatch(actions.loginError(errors));
      return;
    }
    dispatch(actions.loginProgress());
    dispatch(actions.fetchPosts(
      'login', 'http://localhost:3001/api/auth',
      `name=${user.name}&password=${user.password}`,
    ))
      .then((param) => {
        const data = JSON.parse(param.posts);
        if (data.status === 'success') {
          dispatch(actions.loginSuccess());
          ownProps.history.push('/');
        } else {
          dispatch(actions.loginError({ summary: data.error }));
        }
      });
  },
});

Login.defaultProps = {
  errors: { summary: '', name: '', password: '' },
  user: { name: '', password: '' },
};

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    summary: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string,
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
  }),
  submitDisabled: PropTypes.bool.isRequired,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  user: stateProps.user,
  errors: stateProps.errors,
  submitDisabled: stateProps.submitDisabled,
  onChange(event) { dispatchProps.onChange(event); },
  onSubmit(event) { dispatchProps.onSubmit(event, stateProps.user); },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(Login));
