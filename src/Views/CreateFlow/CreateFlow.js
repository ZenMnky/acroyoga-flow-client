/**
 * reference: drag and drop tutorial
 * https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 */

// core
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SavedFlowsContext } from '../../Components/App/App';

// components
import FlowElements from '../../Components/FlowElements/FlowElements';

// styled components
import ContentContainer from '../../Components/FlowDesign/ContentContainer';
import DescriptionSection from '../../Components/DescriptionSection/DescriptionSection';
import FlowDesign from '../../Components/FlowDesign/FlowDesign';
import SubmitFlow from '../../Components/FlowDesign/SubmitFlow';
import config from '../../config';


export default function CreateFlow() {
  const { savedFlows, setSavedFlows } = useContext(SavedFlowsContext);
  const [selectedAcroYogaElements, setSelectedAcroYogaElements] = useState([]);
  const [flowTitle, setFlowTitle] = useState('');
  const history = useHistory();

  const handleSaveFlow = () => {
    //grab the title and trim
    const title = flowTitle.trim();

    //replace whitespace with a dash
    //remove apostrophes
    let slug = title.toLowerCase();
    slug = slug.replace(/(\s)+/g, '-');
    slug = slug.replace(/(')+/g, '');

    let flowSequenceSlugs = selectedAcroYogaElements.map(element => {
      return element.elementSlugId
    })
    // construct the new flow object
    const newFlow = {
      flowTitle: title,
      flowSlugTitle: slug,
      flowSequence: flowSequenceSlugs,
    };

    // copy existing flows
    const savedFlowsCopy = [...savedFlows];

    // add new flow
    savedFlowsCopy.unshift(newFlow);

    // update context
    setSavedFlows(savedFlowsCopy);

    // update API
    const postNewFlow = async (newFlow) => {
      try {
        const postFlowResponse = await fetch(`${config.API_BASE_ENDPOINT}/flows`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFlow)
        })
      } catch (error) {
        console.error(error)
      }
    }

    postNewFlow(newFlow);


    // reroute to the view flows page
    history.push('/view/flows');
  };

  function handleOnDragEnd(result) {

    // handles dragging a card to the left or right ( no change in list position)
    if (!result.destination) return;

    // handles dragging a card to the bottom position
    const acroYogaFlowDraft = Array.from(selectedAcroYogaElements);
    const [reorderedAcroYogaFlowDraft] = acroYogaFlowDraft.splice(result.source.index, 1);
    acroYogaFlowDraft.splice(result.destination.index, 0, reorderedAcroYogaFlowDraft);

    setSelectedAcroYogaElements(acroYogaFlowDraft);
  }

  return (
    <ContentContainer>
      <h1>Create Acro Flow</h1>
      <DescriptionSection>
        <p>Use the listed elements to add cards to the design area.</p>
        <p>Drag and drop cards to order them.</p>
        <p>Once the sequence is in the desired order, save your flow with a catchy title.</p>
      </DescriptionSection>
      <FlowElements
        selectedAcroYogaElements={selectedAcroYogaElements}
        setSelectedAcroYogaElements={(x) => setSelectedAcroYogaElements(x)}
      />
      <FlowDesign
        handleOnDragEnd={handleOnDragEnd}
        acroElements={selectedAcroYogaElements}
      />
      <SubmitFlow
        flowTitle={flowTitle}
        setFlowTitle={setFlowTitle}
        setSelectedAcroYogaElements={(x) => setSelectedAcroYogaElements(x)}
        handleSaveFlow={handleSaveFlow}
      />
    </ContentContainer>

  );
}
