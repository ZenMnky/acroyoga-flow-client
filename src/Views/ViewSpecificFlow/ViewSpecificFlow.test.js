import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { SavedFlowsContext } from '../../Components/App/App';
import ViewSpecificFlow from './ViewSpecificFlow';


it('renders without crashing', () => {
    const div = document.createElement('div');
    const acroElements = [];
    const savedFlows = [];
  
    ReactDOM.render(
        <Router>
            <SavedFlowsContext.Provider value={{savedFlows, acroElements}}>
                <ViewSpecificFlow />
            </SavedFlowsContext.Provider>
        </Router>
        
      , 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });