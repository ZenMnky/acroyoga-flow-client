import React, { useContext } from 'react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import ContentContainer from '../../Components/FlowDesign/ContentContainer';
import { SavedFlowsContext } from '../../Components/App/App';

export default function ViewFlows() {
  const { savedFlows } = useContext(SavedFlowsContext);

  const listOfFlows = savedFlows.map((flowItem) => (
    <div key={cuid()}>
      <Link to={`/view/flows/${flowItem.flowSlug}`}>
        <h2>{flowItem.flowTitle}</h2>
      </Link>

      <p>{flowItem.flowSlug}</p>
    </div>
  ));
  return (
    <ContentContainer>
      <h1>View Flows</h1>
      {listOfFlows}
    </ContentContainer>
  );
}
