import "./styles/styles.scss";
import Landing from "./screens/landing";
import About from "./screens/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/support" component={Support} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
