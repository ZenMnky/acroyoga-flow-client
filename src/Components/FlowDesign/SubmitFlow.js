import React, { useState } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import TextInputField from './TextInputField';
import FlexSection from './FlexSection';
import Button from './Button';
import Form from './FormContainer';

function SubmitFlow(props) {
  const {
    flowTitle, setFlowTitle, setSelectedAcroYogaElements, handleSaveFlow, selectedAcroYogaElements
  } = props;
  const [isTitleValid, setIsTitleValid] = useState(true);
  const [isFlowValid, setIsFlowValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = flowTitle.trim();

    // title must be at least three characters in length
    // else, prevent submission and display message to user
    if (title.length < 3) {
      setIsTitleValid(false);
      return;
    } else {
      setIsTitleValid(true);
    }
    

    // flow must contain at least three elements
    if(!selectedAcroYogaElements || selectedAcroYogaElements.length < 3){
      setIsFlowValid(false);
      return;
    } else {
      setIsFlowValid(true)
    }
    

    // add new flow to the library
    // redirect user to the view page of the new flow
    handleSaveFlow();
  };

  const handleReset = (e) => {
    e.preventDefault();
    // clear selected flow elements by passing in an empty array
    setSelectedAcroYogaElements([]);
    handleClearTitle();
  };

  const handleRandomTitle = (e) => {
    setFlowTitle(faker.random.words(3).toLowerCase());
  };

  const handleClearTitle = () => {
    setFlowTitle('');
  };

  const titleValidationMessage = (
    <p>Title must be at least three letters</p>
  );

  const flowValidationMessage = (
    <p>Flow must contain at least three elements</p>
  )

  return (
    <section>
      <Form>
        <label htmlFor="flow-title">Flow Title</label>
        {isTitleValid ? '' : titleValidationMessage}
        {isFlowValid ? '' : flowValidationMessage}
        <TextInputField type="text" name="flow-title" value={flowTitle} onChange={(e) => setFlowTitle(e.target.value)} required />

        <FlexSection>
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Save Flow
          </Button>
          <Button type="reset" onClick={(e) => handleReset(e)}>
            Clear Flow
          </Button>
          <Button type="button" onClick={(e) => handleRandomTitle(e)}>
            Random Title
          </Button>
          <Button type="button" onClick={(e) => handleClearTitle(e)}>
            Clear Title
          </Button>

        </FlexSection>
      </Form>

    </section>
  );
}

SubmitFlow.propTypes = {
    flowTitle: PropTypes.string, 
    setFlowTitle: PropTypes.func, 
    setSelectedAcroYogaElements: PropTypes.func, 
    handleSaveFlow: PropTypes.func,
    selectedAcroYogaElements: PropTypes.array
}

export default SubmitFlow;