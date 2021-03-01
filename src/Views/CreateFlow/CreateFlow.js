import React, { useState } from 'react';
import './CreateFlow.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';    
import {acroYogaData} from '../../store';

/**
 * reference: drag and drop tutorial
 * https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
 */

export default function CreateFlow() {
    const [acroElements, updateAcroElements ]  = useState(acroYogaData);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(acroElements);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        updateAcroElements(items);
      }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Create Acro Flow</h1>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="acro-flow-elements">
                    {(provided) => (
                    <ul className="acro-flow-elements" 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                    >
                        {acroElements.map(({id, name, thumb}, index) => {
                        return (
                            <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                                <li 
                                    ref={provided.innerRef} 
                                    {...provided.draggableProps} 
                                    {...provided.dragHandleProps}
                                >
                                <div className="acro-flow-elements-thumb">
                                    <img src={thumb} alt={`${name} Thumb`} />
                                </div>
                                <p>
                                    { name }
                                </p>
                                </li>
                            )}
                            </Draggable>
                        );
                        })}
                        {provided.placeholder}
                    </ul>
                    )}
                </Droppable>
                </DragDropContext>
            </header>
        </div>
    )
}
