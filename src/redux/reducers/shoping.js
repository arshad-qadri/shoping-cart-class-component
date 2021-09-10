const initState = {
  product: [
    {
      id: 1,
      name: "HP Laptop",
      img: "https://m.media-amazon.com/images/I/41Z5NEsKo9L._AC_SY200_.jpg",
      desc: "Some quick example text to build on the card.",
      price: 50000,
    },
    {
      id: 2,
      name: "Ceiling Fan",
      img: "https://rukminim1.flixcart.com/image/612/612/km57hjk0/fan/o/u/e/brio-turbo-high-speed-decorative-ceiling-fan-candes-original-imagf445pqtjdtq6.jpeg?q=70",
      desc: "Some quick example text to build on the card.",
      price: 2000,
    },
    {
      id: 3,
      name: "Earbuds ",
      img: "https://m.media-amazon.com/images/I/31KhPsVZWlL._AC_SY200_.jpg",
      desc: "Some quick example text to build on the card.",
      price: 2000,
    },
    {
      id: 4,
      name: "Desktop",
      img: "https://m.media-amazon.com/images/I/41k91d0EYfL._AC_SY200_.jpg",
      desc: "Some quick example text to build on the card.",
      price: 33000,
    },
    {
      id: 5,
      name: "JBL Speaker",
      img: "https://m.media-amazon.com/images/I/51omlJ2dRwL._AC_SY200_.jpg",
      desc: "Some quick example text to build on the card.",
      price: 1899,
    },
    {
      id: 6,
      name: "Desktop",
      img: "https://m.media-amazon.com/images/I/41k91d0EYfL._AC_SY200_.jpg",
      desc: "Some quick example text to build on the card.",
      price: 33000,
    },
  ],
  cart: [],
  total: 0,
};

const product = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log(action);
      let item = state.product.find((e) => e.id === action.payload);
      let cartItem = state.cart.find((e) => e.id === action.payload);
      //   console.log("item", item);

      if (cartItem) {
        item.qty += 1;
        return {
          ...state,
          total: state.total + item.price,
        };
      } else {
        item.qty = 1;
        let newTotal = state.total + item.price;
        return {
          ...state,
          cart: [...state.cart, item],
          total: newTotal,
        };
      }

    case "REMOVE":
      let itemRem = state.cart.find((e) => e.id === action.payload);
      let removeItem = state.cart.filter((e) => e.id !== action.payload);
      let newTotal = state.total - itemRem.price * itemRem.qty;
      return {
        ...state,
        cart: removeItem,
        total: newTotal,
      };

    case "INC_QTY":
      let incQty = state.cart.find((e) => e.id === action.payload);
      //   console.log("incQty", incQty);
      let inc = state.total + incQty.price;
      incQty.qty += 1;
      return {
        ...state,
        total: inc,
      };
    case "DEC_QTY":
      let decQty = state.cart.find((e) => e.id === action.payload);
      let dec = state.total - decQty.price;
      if (decQty.qty > 1) {
        decQty.qty -= 1;
        return {
          ...state,
          total: dec,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default product;
