/**
 * reference: drag and drop tutorial
 * https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 */

import React, { useState } from 'react';
import faker from 'faker';

import FlowElements from '../../Components/FlowElements/FlowElements';
// test data used to develop making custom flows
import acroYogaFlow from '../../testAcroYogaFlowArrays';


// styled components
import ContentContainer from '../../Components/FlowDesign/ContentContainer';
import DescriptionSection from '../../Components/DescriptionSection/DescriptionSection';
import FlowDesign from '../../Components/FlowDesign/FlowDesign';
import SubmitFlow from '../../Components/FlowDesign/SubmitFlow';



export default function CreateFlow() {
    
    const [selectedAcroYogaElements, setSelectedAcroYogaElements] = useState(acroYogaFlow.flowSequence);
    const [flowTitle, setFlowTitle] = useState(faker.random.words(3))

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
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
                <FlowElements />
                <FlowDesign handleOnDragEnd={handleOnDragEnd} acroElements={selectedAcroYogaElements} />
               <SubmitFlow flowTitle={flowTitle} setFlowTitle={setFlowTitle} />
        </ContentContainer>
        
    )
}
