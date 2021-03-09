import React, { useContext } from 'react';
import { SavedFlowsContext } from '../App/App';
import PropTypes from 'prop-types';
import faker from 'faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// styled components
import AcroYogaElementButton from '../../StyledComponents/AcroYogaElementButton';


function FlowElements({ selectedAcroYogaElements, setSelectedAcroYogaElements }) {
  // grab the array of element objects from state
  const {acroElements, elementsLoading} = useContext(SavedFlowsContext);


  // when the acroyoga element button is clicked,
  // a corresponding card should be added to the selectedAcroYogaElements array
  // which is used to populate the Flow Builder component
  const handleAcroElementClicked = (acroElementName) => {
    // use the provided name to search the list of all elements
    // find and store the element with the name value that matches the given name (acroElementName)
    const matchingAcroElement = acroElements.find((element) => element.elementName === acroElementName);

    // give it a unique id key-value with cuid()
    matchingAcroElement.id = faker.random.uuid();

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

  const loadingMessage = () => {
    return (
    <div>
      <h2>Loading...</h2>
      <FontAwesomeIcon icon={faSpinner} className='fa-7x' spin/>
    </div>
    )
  }

  let view = (elementsLoading)
  ? loadingMessage()
  : AcroYogaElementButtons


  return (
    <section id="flowBuilder_elements-section">
      <h2>AcroYoga Elements</h2>
      <div id="flowBuilder_elements-section_elements">
        {view}
      </div>
    </section>
  );
}

FlowElements.propTypes = {
  selectedAcroYogaElements: PropTypes.array, 
  setSelectedAcroYogaElements: PropTypes.func
}

export default FlowElements;