import "./styles/styles.scss";
import Landing from "./screens/landing";
import About from './screens/About'
import Support from './screens/Support';
// import Footer from "./components/Footer";
// import Dashboard from "./screens/Dashboard";

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
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
