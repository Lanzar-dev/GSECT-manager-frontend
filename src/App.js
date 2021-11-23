import "./styles/styles.scss";
import Landing from "./screens/landing";
import About from './screens/About'
import Support from './screens/Support';
import DashBoard from "./screens/active-user/DashBoard";

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
