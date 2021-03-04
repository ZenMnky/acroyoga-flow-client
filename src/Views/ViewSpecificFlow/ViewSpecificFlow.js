import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ContentContainer from '../../Components/FlowDesign/ContentContainer';
import { SavedFlowsContext } from '../../Components/App/App';
import AcroFlowElementsList from '../../Components/FlowDesign/AcroFlowElementsList';
import AcroFlowElementsThumb from '../../Components/FlowDesign/AcroFlowElementsThumb';
import Button from '../../Components/FlowDesign/Button';
// import cuid from 'cuid';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';

export default function ViewSpecificFlow() {
  const { savedFlows } = useContext(SavedFlowsContext);
  const params = useParams();
  const history = useHistory();

  // find the saved flow that matches the flowSlug, passed in the URL params
  const matchingFlow = savedFlows.find((flow) => flow.flowSlug === params.flowSlug);

  // validate
  if (!matchingFlow) {
    history.push('/404');
  }

  // destructure
  const { flowTitle, flowSequence } = matchingFlow;
  // construct view

  const view = (
    <section>
      <h1>{flowTitle}</h1>
      <AcroFlowElementsList>
        {flowSequence.map(({ id, name, thumb }, index) => (

          <li key={id}>
            <div>
              <AcroFlowElementsThumb>
                <img src={thumb} alt={`${name} Thumb`} />
              </AcroFlowElementsThumb>
            </div>

            <p>
              { name }
            </p>
          </li>

        ))}
      </AcroFlowElementsList>

      <Button type="button" onClick={() => history.push('/view/flows')}>
        <LeftArrow title='left arrow' /> Back to Flows
      </Button>

    </section>
  );

  return (
    <ContentContainer>
      {view}
    </ContentContainer>
  );
}
