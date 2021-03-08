import React, { useContext } from 'react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import ContentContainer from '../../Components/StyledComponents/ContentContainer';
import { SavedFlowsContext } from '../../Components/App/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ViewFlows() {
  const { savedFlows, flowsLoading } = useContext(SavedFlowsContext);

  const listOfFlows = savedFlows.map((flowItem) => (
    <div key={cuid()}>
      <Link to={`/view/flows/${flowItem.flowSlugTitle}`}>
        <h2>{flowItem.flowTitle}</h2>
      </Link>

      <p>{flowItem.flowSlugTitle}</p>
    </div>
  ));

  const loadingMessage = () => {
    return (
    <div>
      <h2>Loading...</h2>
      <FontAwesomeIcon icon={faSpinner} className='fa-7x' spin/>
    </div>
    )
  }

  let view = (flowsLoading) ? loadingMessage() : listOfFlows;

  return (
    <ContentContainer fullView>
      <h1>View Flows</h1>
      {view}
    </ContentContainer>
  );
}
