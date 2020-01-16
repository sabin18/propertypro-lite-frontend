/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/login.css';
import '../styles/styles.css';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/loginAction';

export class Login extends React.Component {
  state = {
    password: '',
    email: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,

    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { state } = this;
    this.props.login(state.password, state.email);
    this.setState({
      password: '', email: '',
    });
  };

  render() {
    const {
      password, email,
    } = this.state;

    const { data } = this.props;

    return (
      <>
<body>
<div className="menu">
{data && data.message && <Redirect to="/" />}
<div className="topnav" id="myTopnav">
<Link to="/"><a href="index.html" className="active">Home</a></Link>
  <a href="javascript:void(0);" className="icon" onClick="myFunction()">
    <i className="fa fa-bars" />
  </a>
</div>
  <div className="topnav-right">
  <Link to="/login"><p><input type="button" value="Login" className="button2" /></p></Link>
  <Link to="/signup"><p><input type="button" value="Sign up" className="button2" /></p></Link>
  </div>
</div>
<br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
  <form className="modal-content1" onSubmit={this.handleSubmit}>
    <div className="container1">
      <div className="login-container">
     <div><h2>Login</h2></div>
    <label htmlFor="uname"><b>Username:</b></label>
<br />
    <input type="text3" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} required />
<br />
    <label htmlFor="psw"><b>Password:</b></label>
<br />
    <input type="password" placeholder="Enter Password" name="password" id="pass" value={password} onChange={this.handleChange} required />
<br />
    <i><button type="submit" className="sbutton5">Login</button></i>
    <label>
<br />
      <input type="checkbox" checked="checked" name="remember" />
{' '}
Remember me
    </label>
      </div>
  <div className="login-container">
    <span className="psw">
Forgot
{' '}
<a href="resetpassword.html">password?</a>
    </span>
  </div>
    </div>
  </form>
<div className="footer">
  <p>copyright 2019 Design by izere roger sabin</p>
</div>
</body>
      </>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.login.data,
  dataError: state.login.dataError,
});

export default connect(mapStateToProps, { login })(Login);
