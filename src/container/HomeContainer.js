import Home from "../component/Home";
import { addToCart, removeToCart } from "../services/action/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cartData: state.cartItems
});
const mapDispacthToProps = (dispacth) => ({
  addToCartHandler: (data) => dispacth(addToCart(data)),
  removeToCartHandler: (data) => dispacth(removeToCart(data))
});

export default connect(mapStateToProps, mapDispacthToProps)(Home);
