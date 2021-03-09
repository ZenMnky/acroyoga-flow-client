import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { SavedFlowsContext } from '../../Components/App/App';
import cuid from 'cuid';
// styled components
import ContentContainer from '../../StyledComponents/ContentContainer';
import AcroFlowElementsList from '../../StyledComponents/AcroFlowElementsList';
import AcroFlowElementsThumb from '../../StyledComponents/AcroFlowElementsThumb';
import Button from '../../StyledComponents/Button';
// svg
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';


export default function ViewSpecificFlow() {
  const { savedFlows, acroElements } = useContext(SavedFlowsContext);
  const params = useParams();
  const history = useHistory();

  // find the saved flow that matches the flowSlug, passed in the URL params
  const matchingFlow = savedFlows.find((flow) => flow.flowSlugTitle === params.flowSlug);

  // validate
  if (!matchingFlow) {
    console.error('unable to finding a flow that matches the provided flow slug title');
    history.push('/404-no-matching-flow-found');
  }

  // destructure
  // flowTitle is a string
  // flowSequence is an array of acro element slug-names
  const { flowTitle, flowSequence } = matchingFlow;


  // using the array of acro element slug-names
  // grab the needed information by searching state for the matching elements
  let expandedFlowSequence = flowSequence.map(acroElementSlug => {
    let matchingElement = acroElements.find(acroElement => acroElement.elementSlugId === acroElementSlug)
    return matchingElement;
  })

  // construct view
  const view = (
    <section>
      <h1>{flowTitle}</h1>
      <AcroFlowElementsList>
        {expandedFlowSequence.map(({ elementName, elementThumbUrl }) => (
          

          <li key={cuid()}>
            <div>
              <AcroFlowElementsThumb>
                <img 
                  src={elementThumbUrl ? elementThumbUrl : 'https://via.placeholder.com/200.jpg?text=loading+image' } 
                  alt={`${elementName ? elementName : 'loading'} Thumb`} 
                />
              </AcroFlowElementsThumb>
            </div>

            <p>
              { elementName }
            </p>
          </li>

        ))}
      </AcroFlowElementsList>

      <Button type="button" onClick={() => history.push('/view/flows')}>
        <LeftArrow title='left arrow' />{' '} Back to Flows
      </Button>

    </section>
  );

  return (
    <ContentContainer>
      {view}
    </ContentContainer>
  );
}
