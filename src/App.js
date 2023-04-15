import "./styles.css";
import HomeContainer from "./container/HomeContainer";
import NavbarContainer from "./container/NavbarContainer";

export default function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <HomeContainer />
    </div>
  );
}
