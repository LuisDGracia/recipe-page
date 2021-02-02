import styled from 'styled-components'

const UtilContainer = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-wrap: wrap;
`;

const Icon = styled.i`
  width: 20px;
`;
const TextContainer = styled.div``;

const Tittle = styled.p`
  color: black;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.3;
`

const Time = styled.p`
  font-size: 14px;
`;

export { UtilContainer, Icon, TextContainer, Tittle, Time };
