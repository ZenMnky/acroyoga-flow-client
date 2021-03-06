import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';
// import { acroYogaElements } from '../../store';

// styled components
import AcroYogaElementButton from '../AcroYogaElementButton/AcroYogaElementButton';
import { SavedFlowsContext } from '../App/App';

function FlowElements({ selectedAcroYogaElements, setSelectedAcroYogaElements }) {
  // grab the array of element objects from state
  const {acroElements} = useContext(SavedFlowsContext);


  // when the acroyoga element button is clicked,
  // a corresponding card should be added to the selectedAcroYogaElements array
  // which is used to populate the Flow Builder component
  const handleAcroElementClicked = (acroElementName) => {
    // use the provided name to search the list of all elements
    // find and store the element with the name value that matches the given name (acroElementName)
    const matchingAcroElement = acroElements.find((element) => element.elementName === acroElementName);

    // give it a unique id key-value with cuid()
    matchingAcroElement.id = cuid();

    // make a copy of the existing selection of elements
    const newSelectedAcroYogaElements = [...selectedAcroYogaElements];

    // add the new element to the list
    newSelectedAcroYogaElements.push(matchingAcroElement);

    // update the stored list of selected elements
    setSelectedAcroYogaElements(newSelectedAcroYogaElements);
  };

  // get a list of all the available acroyoga elements
  // for each item, generate a corresponding button
  const AcroYogaElementButtons = acroElements.map((acroElement) => (

    <AcroYogaElementButton
      onClick={(e) => { handleAcroElementClicked(e.target.value); }}
      key={acroElement.elementSlugId}
      value={acroElement.elementName}
    >
      {acroElement.elementName}
    </AcroYogaElementButton>
  ));

  return (
    <section id="flowBuilder_elements-section">
      <h2>AcroYoga Elements</h2>
      <div id="flowBuilder_elements-section_elements">
        {AcroYogaElementButtons}
      </div>
    </section>
  );
}

FlowElements.propTypes = {
  selectedAcroYogaElements: PropTypes.array, 
  setSelectedAcroYogaElements: PropTypes.func
}

export default FlowElements;