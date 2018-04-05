import React from 'react';
import PropTypes from 'prop-types';

const LoginFormBootsrtap = ({
  onSubmit,
  onChange,
  submitDisabled,
  errors,
  user,
}) => (
  <div className="container">
    <div
      id="loginbox"
      className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
    >
      <div className="panel panel-info" >
        <div className="panel-heading">
          <div className="panel-title">Вход</div>
        </div>

        <div style={{ paddingTop: '30px' }} className="panel-body" >

          <div style={{ height: '25px' }}>
            {errors.summary && <span style={{ padding: '0 40px', color: 'tomato' }}>{errors.summary}</span>}
          </div>
          <form id="loginform" className="form-horizontal" onSubmit={onSubmit}>

            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
              <input
                id="login-username"
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                placeholder="Логин"
                onChange={onChange}
              />
            </div>
            <div style={{ height: '25px' }}>
              {errors.name && <span style={{ padding: '0 40px', color: 'tomato' }}>{errors.name}</span>}
            </div>
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>
              <input
                id="login-password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Пароль"
                value={user.password}
                onChange={onChange}
              />
            </div>
            <div style={{ height: '25px' }}>
              {errors.password && <span style={{ padding: '0 40px', color: 'tomato' }}>{errors.password}</span>}
            </div>
            <div style={{ marginTop: '10px' }} className="form-group">
              <div className="col-sm-12 controls">
                <button
                  id="btn-login"
                  href="#"
                  className="btn btn-success"
                  onClick={onSubmit}
                  disabled={submitDisabled}
                >
                  Войти
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

LoginFormBootsrtap.defaultProps = {
  errors: { summary: '', name: '', password: '' },
  user: { name: '', password: '' },
};

LoginFormBootsrtap.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  submitDisabled: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    summary: PropTypes.string,
    name: PropTypes.string,
    password: PropTypes.string,
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    password: PropTypes.string,
  }),
};

export default LoginFormBootsrtap;
