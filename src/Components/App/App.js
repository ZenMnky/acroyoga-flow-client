import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../../Views/LandingPage/LandingPage';
import PageNotFound from '../../Views/PageNotFound/PageNotFound';
import CreateFlow from '../../Views/CreateFlow/CreateFlow';
import ViewFlows from '../../Views/ViewFlows/ViewFlows';
import testSavedFlowsData from '../../testSavedFlowsData';


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

export const SavedFlowsContext = React.createContext();

function App() {
  const [savedFlows, setSavedFlows] = useState(testSavedFlowsData);
  console.log('savedFlows: ', savedFlows);

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SavedFlowsContext.Provider value={{savedFlows, setSavedFlows}}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/create/flow' component={CreateFlow} />
          <Route path='/view/flows' component={ViewFlows} />
          <Route component={PageNotFound} />
        </Switch>
        </SavedFlowsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
