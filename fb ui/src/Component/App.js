
import './App.css';
import Service from './Service'
import Header from './Header';
import Navi from './Navi'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
         <Switch>
           <Route path = "/" exact="true" >
            <Header />
            <Navi/>
            <Service/>
           </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;