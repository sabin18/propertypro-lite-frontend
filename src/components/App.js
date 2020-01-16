
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAllProperties } from '../actions/propertyAction';
import house2 from '../assets/images/house2.jpg';
import '../styles/styles.css';


export class App extends Component {
  state = {
    getAllProperties: [],
  };

  componentDidMount() {
    const { props} = this;
    props.getAllProperties();
  }
  render() {
    const { props} = this;
    const { AllProperties } = props;
    const properties = AllProperties && AllProperties.map((property) => (
      <div key={property.id}>
     <div className="property">
   <img src={property.image} />
   <h1>{property.name}</h1>
  <p className="price"><b>{property.price}</b></p>
  <p><input type="button" value="View details" className="button" /></p>
  <p><button className="button">Add Flag</button></p>
     </div>
      </div>
    ));
    return (
      <>
<body>
 <div className="menu">
<div className="topnav" id="myTopnav">
  <a href="index.html" className="active">Home</a>
  <div className="dropdown">
    <button className="dropbtn">
Property types
<i className="fa fa-caret-down" />
    </button>
    <div className="dropdown-content">
      <a href="property_types.html">2 bedroom</a>
      <a href="property_types.html">3 bedroom</a>
      <a href="property_types.html">4 bedroom</a>
      <a href="property_types.html">Mini flat</a>
    </div>
  </div>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
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
<div className="content">
<div id="single_product">
<div className="property">
 <img src={house2} />
   <h1>Type:3 Bedroom</h1>
  <p className="price"><b>Price:$2000</b></p>
  <p><input type="button" value="View details" className="button" onClick="window.location.href='details.html'" /></p>
  <p><button className="button">Add Flag</button></p>
</div>
</div>
<div id="single_product">
<div className="property">
 <img src={house2} />
   <h1>Type:3 Bedroom</h1>
  <p className="price"><b>Price:$2000</b></p>
  <p><input type="button" value="View details" className="button" onClick="window.location.href='details.html'" /></p>
  <p><button className="button">Add Flag</button></p>
</div>
{properties}

</div>
</div>
<div className="footer">
  <p>copyright 2019 Design by izere roger sabin</p>
</div>
</body>
      </>
    );
  }
}

App.propTypes = {
  getAllProperties: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  AllProperties: state.property.getAllProperties,
});

export default connect(mapStateToProps, { getAllProperties })(App);
