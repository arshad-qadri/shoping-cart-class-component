import React, { Component } from "react";
import { connect } from "react-redux";
import { decQty, incQty, remove } from "../redux/actions";

export class Cart extends Component {
  render() {
    // console.log("cart", this.props);
    return (
      <>
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "80% 20%" }}
        >
          <div className="d-flex flex-wrap">
            {this.props.cart.map((elem) => {
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
                    <div className="d-flex justify-content-between align-items-center">
                      <h4> {elem.name} </h4>
                      <div>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => this.props.dec(elem.id)}
                        >
                          -
                        </button>
                        <span className="mx-1" style={{ fontWeight: "bolder" }}>
                          {elem.qty}
                        </span>
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => this.props.inc(elem.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <h5>Rs {elem.price} </h5>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => this.props.remove(elem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="border border-1 border-dark mt-2"
            style={{ height: "250px" }}
          >
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Total</h2>
              </div>
              <div className="card-body">
                <h2>Rs {this.props.total}</h2>

                <a href="/#" className="w-100 btn btn-primary">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapstateToProps = (state) => {
  //   console.log("cart state", state.product.cart);
  return {
    cart: state.product.cart,
    total: state.product.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(remove(id)),
    inc: (id) => dispatch(incQty(id)),
    dec: (id) => dispatch(decQty(id)),
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(Cart);
