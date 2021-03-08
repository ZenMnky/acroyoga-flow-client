import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import config from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LandingPage from '../../Views/LandingPage/LandingPage';
import PageNotFound from '../../Views/PageNotFound/PageNotFound';
import CreateFlow from '../../Views/CreateFlow/CreateFlow';
import ViewFlows from '../../Views/ViewFlows/ViewFlows';
import testSavedFlowsData from '../../testSavedFlowsData';
import ViewSpecificFlow from '../../Views/ViewSpecificFlow/ViewSpecificFlow';

const API_BASE = config.API_BASE_ENDPOINT;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
    
  display: flex;
  flex-direction: column;
  height: 100%;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

export const SavedFlowsContext = React.createContext();


function App() {
  const [savedFlows, setSavedFlows] = useState([]);
  const [acroElements, setAcroElements] = useState([]);
  const [elementsLoading, setElementsLoading] = useState(true);
  const [flowsLoading, setFlowsLoading] = useState(true);


  useEffect(() => {

    const fetchElements = async () => {
      try {
        const elementsResponse = await fetch(`${API_BASE}/acroelements`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const acroElements = await elementsResponse.json();

        setAcroElements(acroElements);
        setElementsLoading(acroElements ? false : true)

      } catch (error) {
        console.error(error)
      }
    };

    const fetchSavedFlows = async () => {
      try {
        const savedFlowsResponse = await fetch(`${API_BASE}/flows`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const savedFlows = await savedFlowsResponse.json();
        console.log('fetchSavedFlows ran');
        setSavedFlows(savedFlows)
        setFlowsLoading(savedFlows ? false : true)

      } catch (error) {
        console.error(error)
      }
    };

    fetchElements();
    fetchSavedFlows();


  }, [])


  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SavedFlowsContext.Provider value={{ savedFlows, setSavedFlows, acroElements, flowsLoading, elementsLoading }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create/flow" component={CreateFlow} />
          <Route exact path="/view/flows" component={ViewFlows} />
          <Route path="/view/flows/:flowSlug" component={ViewSpecificFlow} />
          <Route component={PageNotFound} />
        </Switch>
      </SavedFlowsContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
