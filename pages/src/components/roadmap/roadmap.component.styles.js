import styled from 'styled-components';

export const RoadMapContainer = styled.section`
  border-radius: 0.5rem;
`;

export const RoadMaps = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #25282c;
  padding: 4rem;
  gap: 4rem;
`;

export const YearContainer = styled.div`
  /* flex: 1; */
  align-self: center;

  p {
    color: #d9e3ea;
    font-weight: 500;
    text-align: center;
  }
`;

export const Description = styled.div`
  /* flex: 0 0 00px; */
  /* flex: 2; */
  max-width: 850px;

  h4 {
    color: #d9e3ea;
    font-weight: 500;
  }

  .details {
    margin-top: 2rem;
  }
`;

export const TimeFrameContainer = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 5rem;
  }
`;
