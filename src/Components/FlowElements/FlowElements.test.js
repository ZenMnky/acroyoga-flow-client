import React from 'react';
import ReactDOM from 'react-dom';
import { SavedFlowsContext } from '../App/App';
import FlowElements from './FlowElements';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const acroElements = [];
    const elementsLoading = true;
  
    ReactDOM.render(
        <SavedFlowsContext.Provider value={{acroElements, elementsLoading }}>
            <FlowElements
                selectedAcroYogaElements={[]}
                setSelectedAcroYogaElements={(x) => x}
            />
        </SavedFlowsContext.Provider>
      , 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });