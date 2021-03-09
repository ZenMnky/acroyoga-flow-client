import React from 'react';
import ReactDOM from 'react-dom';
import SubmitFlow from './SubmitFlow';

it('renders without crashing', () => {
    const div = document.createElement('div');
  
    ReactDOM.render(
        <SubmitFlow
            flowTitle={'test title'}
            setFlowTitle={(x) => x }
            selectedAcroYogaElements={[]}
            setSelectedAcroYogaElements={(x) => x}
            handleSaveFlow={(x) => x}
        />
      , 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });