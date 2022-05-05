import { Description, RoadMapContainer, RoadMaps, YearContainer, TimeFrameContainer } from './roadmap.component.styles';

export const TimeFrame = ({ children, year, heading }) => {
  return (
    <RoadMapContainer>
      <RoadMaps>
        <YearContainer>
          <p>{year} </p>
        </YearContainer>
        <Description>
          <h4>{heading}</h4>
          <div className='details'>{children}</div>
        </Description>
      </RoadMaps>
    </RoadMapContainer>
  );
};

export const RoadMap = () => {
  return (
    <TimeFrameContainer>
      <h2>What are we upto?</h2>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>

      <TimeFrame year='2020 Q4' heading='Safient concept ideation 💡'>
        <p>- We began our user research for the problem and solution that we deviced for crypto asset inheritance.</p>
        <p>
          - Evaluated the technical and economical feasibility of the solution by integrating solutions such as Ceramic
          network, Textile ThreadDB, Kleros, IPFS/ Filecoin.
        </p>
      </TimeFrame>
    </TimeFrameContainer>
  );
};
