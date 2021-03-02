import React, { useState } from 'react';
import './CreateFlow.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';    
import {acroYogaElements} from '../../store';
import FlowElements from '../../Components/FlowElements/FlowElements';

// styled components
import CreateFlowContainer from '../../Components/FlowDesign/CreateFlowContainer';
import DescriptionSection from '../../Components/DescriptionSection/DescriptionSection';
import FlowDesign from '../../Components/FlowDesign/FlowDesign';

/**
 * reference: drag and drop tutorial
 * https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 */

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
        <CreateFlowContainer>            
                <h1>Create Acro Flow</h1>
                <DescriptionSection>
                    <p>Use the listed elements to add cards to the design area.</p>
                    <p>Drag and drop cards to order them.</p>
                    <p>Once the sequence is in the desired order, save your flow with a catchy title.</p>
                </DescriptionSection>
                <FlowElements />
                <FlowDesign handleOnDragEnd={handleOnDragEnd} acroElements={acroElements} />
               
        </CreateFlowContainer>
        
    )
}
