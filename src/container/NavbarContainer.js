import Navbar from "../component/Navbar";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cartData: state.cartItems
});
const mapDispacthToProps = (dispacth) => ({});

export default connect(mapStateToProps, mapDispacthToProps)(Navbar);
