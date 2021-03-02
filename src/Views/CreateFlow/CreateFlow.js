/**
 * reference: drag and drop tutorial
 * https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 */

import React, { useState } from 'react';
import {acroYogaElements} from '../../store';

import FlowElements from '../../Components/FlowElements/FlowElements';

// styled components
import ContentContainer from '../../Components/FlowDesign/ContentContainer';
import DescriptionSection from '../../Components/DescriptionSection/DescriptionSection';
import FlowDesign from '../../Components/FlowDesign/FlowDesign';
import SubmitFlow from '../../Components/FlowDesign/SubmitFlow';

export default function CreateFlow() {
    const [acroElements, updateAcroElements ]  = useState(acroYogaElements);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(acroElements);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateAcroElements(items);
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
                <FlowDesign handleOnDragEnd={handleOnDragEnd} acroElements={acroElements} />
               <SubmitFlow />
        </ContentContainer>
        
    )
}
