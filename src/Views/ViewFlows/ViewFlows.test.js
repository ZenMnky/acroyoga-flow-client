import React from 'react';
import ReactDOM from 'react-dom';
import { SavedFlowsContext } from '../../Components/App/App';
import ViewFlows from './ViewFlows';


it('renders without crashing', () => {
    const div = document.createElement('div');
    const flowsLoading = true;
    const savedFlows = [];
  
    ReactDOM.render(
        <SavedFlowsContext.Provider value={{savedFlows, flowsLoading }}>
            <ViewFlows />
        </SavedFlowsContext.Provider>
      , 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });