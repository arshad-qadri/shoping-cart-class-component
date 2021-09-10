import { Route, Switch } from "react-router";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
