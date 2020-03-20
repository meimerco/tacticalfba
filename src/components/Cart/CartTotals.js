import React from "react";
import PaypalBtn from "./PaypalBtn";

export default function CartTotals({ uid, cart, totalCart, clearCart, history }) {
  const { cartSubtotal, cartTax, cartTotal } = totalCart;
  return (
    <React.Fragment>
      <div className="container">
        <hr className="mt-5" />
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h6>
              <span>subtotal: </span>
              <span>$ {cartSubtotal}</span>
            </h6>
            <h6>
              <span>tax: </span>
              <span>$ {cartTax}</span>
            </h6>
            <h6>
              <span>total: </span>
              <span>$ {cartTotal}</span>
            </h6>
            <PaypalBtn uid={uid} cart={cart} cartTotal={totalCart.cartTotal} clearCart={clearCart} history={history} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
