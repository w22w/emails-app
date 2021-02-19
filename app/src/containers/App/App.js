import { connect } from "react-redux";
import "./App.css";
import Routs from "router/routes";

const App = () => {
  return (
    <div>
      <Routs />
    </div>
  );
};

export default connect()(App);
