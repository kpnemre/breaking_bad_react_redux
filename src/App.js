import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NavMenu from "./components/NavMenu";
import Detail from "./pages/Detail/Detail";
import Home from './pages/Home/Home';
import Quotes from "./pages/Quotes/Quotes";
import QutoDetail from "./pages/QutoDetail/QutoDetail";

function App() {
  return (
    <Router>
   <NavMenu/>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route> */}
        {/* <Route exact path="/char/:char_id" component={Detail} /> */}
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/char/:char_id" component={Detail} />
        <Route exact path="/quotedetail/:quote_id" component={QutoDetail} />
        <Route exact path="/" component={Home} />
        
        
      </Switch>
   
  </Router>
  );
}

export default App;
