import {Route, Switch} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../../Views/LandingPage/LandingPage';
import PageNotFound from '../../Views/PageNotFound/PageNotFound';
import CreateFlow from '../../Views/CreateFlow/CreateFlow';
import ViewFlows from '../../Views/ViewFlows/ViewFlows';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
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
