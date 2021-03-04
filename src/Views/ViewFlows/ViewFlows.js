import React, { useContext } from 'react'
import ContentContainer from '../../Components/FlowDesign/ContentContainer'
import {SavedFlowsContext} from '../../Components/App/App';
import cuid from 'cuid';
import { Link } from 'react-router-dom';

export default function ViewFlows() {
    const { savedFlows } = useContext(SavedFlowsContext);

    let listOfFlows = savedFlows.map(flowItem => {
        return(
            <div key={cuid()}>
                <Link to={`/view/flows/${flowItem.flowSlug}`}>
                    <h2>{flowItem.flowTitle}</h2>
                </Link>
                
                <p>{flowItem.flowSlug}</p>
            </div>
        )
    })
    return (
        <ContentContainer>
            <h1>View Flows</h1>
            {listOfFlows}
        </ContentContainer>
    )
}
