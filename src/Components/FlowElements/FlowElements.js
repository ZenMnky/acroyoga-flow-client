import React from 'react';
import { acroYogaElements } from '../../store';

// styled components
import AcroYogaElementButton from '../acroYogaElementButton/AcroYogaElementButton';


export default function FlowElements() {
    // get a list of all the available acroyoga elements
    // for each item, generate a corresponding button
    let acroYogaElementButtons = acroYogaElements.map( acroElement => {
        return(
            <AcroYogaElementButton key={acroElement.id}>
                    {acroElement.name}
            </AcroYogaElementButton>
        )
    })
    // when the button is clicked, 
    // a corresponding card should be added to the flow builder component
    
    return (
        <section id='flowBuilder_elements-section'>
            <h2>AcroYoga Elements</h2>
            <div id="flowBuilder_elements-section_elements">
                {acroYogaElementButtons}
            </div>        
        </section>
    )
}
