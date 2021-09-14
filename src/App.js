import {Route, Switch, Redirect} from 'react-router-dom'
import Quotes from './pages/Quotes';
import ShowQuote from './pages/ShowQuote';
import AddQuote from './pages/AddQuote';
import Layout from "./components/layout/Layout"
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
      </Switch>
     </Layout> 
  );
}

export default App;
