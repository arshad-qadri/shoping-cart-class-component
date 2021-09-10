import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    // console.log("navbar", this.props.cart.length);
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <div className="container">
            <NavLink className="navbar-brand text-white" to="/">
              Product
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active text-white"
                    aria-current="page"
                    to="/cart"
                  >
                    Cart &nbsp;
                    {!this.props.cart.length ? "" : this.props.cart.length}
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};
export default connect(mapStateToProps, {})(Navbar);
