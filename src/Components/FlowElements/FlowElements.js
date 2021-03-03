import React from 'react';
import cuid from 'cuid';
import { acroYogaElements } from '../../store';

// styled components
import AcroYogaElementButton from '../AcroYogaElementButton/AcroYogaElementButton';



export default function FlowElements({selectedAcroYogaElements, setSelectedAcroYogaElements}) {
    // when the acroyoga element button is clicked, 
    // a corresponding card should be added to the selectedAcroYogaElements array
    // which is used to populate the Flow Builder component
    const handleAcroElementClicked = (acroElementName) => {        
        // use the provided name to search the list of all elements
        // find and store the element with the name value that matches the given name (acroElementName)
        let matchingAcroElement = acroYogaElements.find(element => element.name === acroElementName);
        
        // give it a unique id key-value with cuid()
        matchingAcroElement.id = cuid();
       
        // make a copy of the existing selection of elements
        let newSelectedAcroYogaElements = [...selectedAcroYogaElements];
        
        // add the new element to the list
        newSelectedAcroYogaElements.push(matchingAcroElement);

        // update the stored list of selected elements
        setSelectedAcroYogaElements(newSelectedAcroYogaElements);
    }


    // get a list of all the available acroyoga elements
    // for each item, generate a corresponding button
    let AcroYogaElementButtons = acroYogaElements.map( acroElement => {
        return(
            
            <AcroYogaElementButton 
                onClick={(e) => {handleAcroElementClicked(e.target.value)}} 
                key={acroElement.id} 
                value={acroElement.name}
            >
                    {acroElement.name}
            </AcroYogaElementButton>
        )
    })
    
    
    return (
        <section id='flowBuilder_elements-section'>
            <h2>AcroYoga Elements</h2>
            <div id="flowBuilder_elements-section_elements">
                {AcroYogaElementButtons}
            </div>        
        </section>
    )
}
