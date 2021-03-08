import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import faker from 'faker';

// styled components
import AcroFlowElementsList from './AcroFlowElementsList';
import AcroFlowElementsThumb from './AcroFlowElementsThumb';

function FlowDesign(props) {
  const { handleOnDragEnd, acroElements } = props;

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
              {acroElements.map(({ id, elementName, elementThumbUrl }, index) => (
                <Draggable key={`${id}-${index}`} draggableId={`${id}-${index}`} index={index}>
                  {(provided) => (
                    <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <AcroFlowElementsThumb>
                            <img src={elementThumbUrl} alt={`${elementName} Thumb`} />
                          </AcroFlowElementsThumb>
                        <p>
                            { elementName }
                          </p>
                      </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </AcroFlowElementsList>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

FlowDesign.propTypes = {
  handleOnDragEnd: PropTypes.func,
  acroElements: PropTypes.array
}

export default FlowDesign;