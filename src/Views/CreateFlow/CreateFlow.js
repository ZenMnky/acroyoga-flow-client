import React from 'react';
import './CreateFlow.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';    
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {acroYogaData} from '../../store';

console.log('acroYogaData: ', acroYogaData)

export default function CreateFlow() {
    return (
        <article id='createFlowView' className='css-createFlowView' >
            <h1>Create Flow</h1>
            <div id='create-flow_draggable-list' className='draggable-list_wrapper'>
                <div className='draggable_item'>
                    <span className='draggable_item-text'>List Item 1</span>
                    <div className='draggable_item-icon'>
                        <FontAwesomeIcon icon={faBars} className='fa' />
                    </div>
                </div>
                <div className='draggable_item'>
                    <span className='draggable_item-text'>List Item 2</span>
                    <FontAwesomeIcon icon={faBars} className='fa' />
                </div>
                <div className='draggable_item'>
                    <span className='draggable_item-text'>List Item 3</span>
                    <FontAwesomeIcon icon={faBars} className='fa' />
                </div>
                <div className='draggable_item'>
                    <span className='draggable_item-text'>List Item 4</span>
                    <FontAwesomeIcon icon={faBars} className='fa' />
                </div>
            </div>
            
        </article >
    )
}
