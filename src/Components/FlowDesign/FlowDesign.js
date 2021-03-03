import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// styled components
import AcroFlowElementsList from './AcroFlowElementsList';
import AcroFlowElementsThumb from './AcroFlowElementsThumb';

export default function FlowDesign(props) {
    let {handleOnDragEnd, acroElements} = props;
    
    return (
        <section>
            <h2>AcroYoga Flow Design</h2>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="acro-flow-elements">
                        {(provided) => (
                            <AcroFlowElementsList
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
                                                    <AcroFlowElementsThumb>
                                                        <img src={thumb} alt={`${name} Thumb`} />
                                                    </AcroFlowElementsThumb>
                                                    <p>
                                                        { name }
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </AcroFlowElementsList>
                        )}
                    </Droppable>
                </DragDropContext>
        </section>
    )
}
