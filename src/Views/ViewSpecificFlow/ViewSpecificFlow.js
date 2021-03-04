import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import ContentContainer from '../../Components/FlowDesign/ContentContainer'
import {SavedFlowsContext} from '../../Components/App/App';
// import cuid from 'cuid';

export default function ViewSpecificFlow() {
    const { savedFlows } = useContext(SavedFlowsContext);
    let params = useParams();
    

    // let listOfFlows = savedFlows.map(flowItem => {
    //     return(
    //         <div key={cuid()}>
    //             <h2>{flowItem.flowTitle}</h2>
    //         </div>
    //     )
    // })
    return (
        <ContentContainer fullView>
            <h1>View Flow: {params.flowName}</h1>
        </ContentContainer>
    )
}