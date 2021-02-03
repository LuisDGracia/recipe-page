import styled from 'styled-components'

const UtilContainer = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  flex-wrap: wrap;

  @media screen and (min-width: 426px) {
    width: 70%;
  }
`;

const Icon = styled.i`
  width: 20px;

  @media screen and (min-width: 426px) {
    font-size: 2em;
  }
`;
const TextContainer = styled.div``;

const Tittle = styled.p`
  color: black;
  font-size: 12px;
  font-weight: bold;
  opacity: 0.3;

  @media screen and ( min-width: 426px ){
    font-size: 18px;
  }
`

const Time = styled.p`
  font-size: 14px;

  @media screen and (min-width: 426px) {
    font-size: 16px;
  }
`;

export { UtilContainer, Icon, TextContainer, Tittle, Time };
