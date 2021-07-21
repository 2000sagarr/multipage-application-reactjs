import { Route, Switch , Redirect} from "react-router-dom";
import AllQuaotes from "./pages/AllQuotes";
import QuateDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" /> 
      </Route>
      <Route path="/quotes" exact>
        <AllQuaotes />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuateDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
