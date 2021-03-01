import {Route, Switch} from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../../Views/LandingPage/LandingPage';
import PageNotFound from '../../Views/PageNotFound/PageNotFound';
import CreateFlow from '../../Views/CreateFlow/CreateFlow';
import ViewFlows from '../../Views/ViewFlows/ViewFlows';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/create/flow' component={CreateFlow} />
          <Route path='/view' component={ViewFlows} />
          
          <Route component={PageNotFound} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
