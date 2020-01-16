import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../actions/signUpAction';
import '../styles/styles.css';
import '../styles/signup.css';

export class SignUp extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    address: '',
    phonenumber: '',
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
    this.props.signUp(state.firstname, state.lastname, state.address, state.phonenumber, state.password, state.email);
    this.setState({
      firstname: '', lastname: '', phonenumber: '', address: '', password: '', email: '',
    });
  }

  render() {
    const {
      firstname, lastname, address, phonenumber, password, email,
    } = this.state;
    const { data } = this.props;
    return (
      <>
<body>
<div className="menu">
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
  <form className="modal-content1" onSubmit={this.handleSubmit}>
    <div className="container1">
      <h2 className="signup-text">Sign Up</h2>
      {data && data.message && <Redirect to="/login" />}
      <p className="signup-text">Please fill in this form to create an account on  ​PropertyPro-lite.</p>
      <hr />
      <label htmlFor="fname"><b>First name:</b></label>
<br />
      <input type="text2" placeholder="First name" name="firstname" value={firstname} onChange={this.handleChange} />
<br />
      <label htmlFor="sname"><b>Second name:</b></label>
<br />
      <input type="text2" placeholder="Second name" name="lastname" value={lastname} onChange={this.handleChange} />
<br />
      <label htmlFor="oname"><b>Other name:</b></label>
<br />
      <input type="text2" placeholder="other name" name="address" value={address} onChange={this.handleChange} />
<br />
      <label><b>Email:</b></label>
<br />
      <input type="text2" placeholder="Enter Email" name="email" value={email} onChange={this.handleChange} />
<br />
      <label><b>Address:</b></label>
<br />
      <input type="text2" placeholder="address" name="address" value={address} onChange={this.handleChange} />
<br />
      <label><b>Phone number:</b></label>
<br />
      <input type="text2" placeholder="Phone number" name="phonenumber" value={phonenumber} onChange={this.handleChange} />
<br />
      <label><b>Password:</b></label>
<br />
      <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} />
<br />
      <label>
        <input type="checkbox" checked="checked" name="remember" style={{ margin: '15px' }} />
{' '}
Remember me
      </label>
      <p>
By creating an account you agree to our
{' '}
<a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>
.
      </p>
      <div className="clearfix">
        <button type="submit" className="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
<footer>
   <p>copyright 2019 Design by izere roger sabin</p>
</footer>
</body>
      </>
    );
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.register.data,
  dataError: state.register.dataError,
});

export default connect(mapStateToProps, { signUp })(SignUp);
