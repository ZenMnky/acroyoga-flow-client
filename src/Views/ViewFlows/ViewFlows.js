import React, { useContext } from 'react'
import ContentContainer from '../../Components/FlowDesign/ContentContainer'
import {SavedFlowsContext} from '../../Components/App/App';
import cuid from 'cuid';

export default function ViewFlows() {
    const { savedFlows } = useContext(SavedFlowsContext);

    let listOfFlows = savedFlows.map(flowItem => {
        return(
            <div key={cuid()}>
                <h2>{flowItem.flowTitle}</h2>
                <p>{flowItem.flowSlug}</p>
            </div>
        )
    })
    return (
        <ContentContainer fullView>
            <h1>View Flows</h1>
            {listOfFlows}
        </ContentContainer>
    )
}
