import React from 'react';
import ReactDOM from 'react-dom';
import { SavedFlowsContext } from '../../Components/App/App';
import CreateFlow from './CreateFlow';


it('renders without crashing', () => {
    const div = document.createElement('div');
    const acroElements = [];
    const savedFlows = [];
    const setSavedFlows = (x) => {x};
  
    ReactDOM.render(
        <SavedFlowsContext.Provider value={{savedFlows, setSavedFlows, acroElements }}>
            <CreateFlow />
        </SavedFlowsContext.Provider>
      , 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });