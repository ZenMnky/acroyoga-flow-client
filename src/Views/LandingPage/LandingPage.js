import React from 'react';
import DescriptionSection from '../../Components/StyledComponents/DescriptionSection';
import ContentContainer from '../../Components/StyledComponents/ContentContainer';

export default function LandingPage() {

  return (
    <ContentContainer fullView>
      <h1>About</h1>
      <div>
      <img src='https://i.ibb.co/jbvpGct/Justin-lexi-acro-art.png' alt='groovy acroyoga' />
        <DescriptionSection>
          
          <h3>{`🎯 Primary goal of the app:`}</h3>
          <p>{`Help AcroYoga practitioners develop a flow by allowing users to Create, Save, and Share (via url) an AcroYoga sequence that is comprised of position images and the position names (aka 'acroyoga elements')`}</p>
        </DescriptionSection>
        <DescriptionSection>
          <h3>🤸‍♂️ Functionality </h3>
          <p>
            {`Create an AcroYoga flow, name it, save it, and view it 😁`}
          </p>
        </DescriptionSection>
        <DescriptionSection>
          <h3>👨‍💻 Tech</h3>
          <p>PERN Stack: PostgreSQL, Express, React, Node</p>
          <p>Special Note: Using hooks and styled components</p>
        </DescriptionSection>
        
      </div>
    </ContentContainer>
  );
}
