import {Route, Switch, Redirect} from 'react-router-dom'
import Quotes from './pages/Quotes';
import ShowQuote from './pages/ShowQuote';
import AddQuote from './pages/AddQuote';
import Layout from "./components/layout/Layout"
import NotFound from './pages/NotFound';
function App() {
  return (
   <Layout> 
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:id" >
          <ShowQuote />
        </Route>
        <Route path="/add-new-quote" >
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
     </Layout> 
  );
}

export default App;
