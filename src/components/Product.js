import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions";

export class Product extends Component {
  render() {
    // console.log("props", this.props);
    return (
      <div className="container mx-auto  d-flex flex-wrap justify-content-between ">
        {this.props.product.map((elem) => {
          return (
            <div
              key={elem.id}
              className="card m-2 p-2"
              style={{ width: "18rem", border: "1px solid #000" }}
            >
              <img
                src={elem.img}
                className="card-img-top img-fluid"
                alt={elem.name}
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <p className="card-text">{elem.desc}</p>
                <h4> {elem.name} </h4>
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Rs {elem.price} </h5>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.props.addtocart(elem.id)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //   console.log("state", state);
  return {
    product: state.product.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addtocart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
