import React from 'react';
import DescriptionSection from '../../Components/DescriptionSection/DescriptionSection';
import ContentContainer from '../../Components/FlowDesign/ContentContainer';

export default function LandingPage() {

  return (
    <ContentContainer fullView>
      <h1>Landing Page</h1>
      <div>
        <h2>Tell me about this thing</h2>
        <DescriptionSection>
          <h3>Idea</h3>
          <p>{`I wanted a way to create a visual reference of AcroYoga flows`}</p>
        </DescriptionSection>
        <DescriptionSection>
          <h3> Functionality </h3>
          <p>
            {`Currently, this is Front-End only, and state is transient.`}
          </p>
          <p>
            {`What the heck does that mean in practice?`}
          </p>
          <p>{`Any flows you create will not persist. 
              Once you reload or leave the site, the flows are gone. 
              They exist only in your browser while you're on this site.`}
          </p>
        </DescriptionSection>
        <DescriptionSection>
          <h3>Tech</h3>
          <p>PERN Stack: PostgreSQL, Express, React, Node</p>
          <p>Special Note: Using hooks and styled components</p>
        </DescriptionSection>
        
      </div>
    </ContentContainer>
  );
}
