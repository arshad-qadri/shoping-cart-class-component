export const addToCart = (id) => {
  //   console.log("action id", id);
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

export const remove = (id) => {
  //   console.log("remove", id);
  return {
    type: "REMOVE",
    payload: id,
  };
};

export const incQty = (id) => {
  return {
    type: "INC_QTY",
    payload: id,
  };
};
export const decQty = (id) => {
  return {
    type: "DEC_QTY",
    payload: id,
  };
};
