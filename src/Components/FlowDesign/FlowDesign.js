import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';   

export default function FlowDesign(props) {
    let {handleOnDragEnd, acroElements} = props;

    return (
        <section>
            <h2>AcroYoga Flow Design</h2>
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
        </section>
    )
}
