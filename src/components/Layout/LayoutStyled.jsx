import styled from 'styled-components'

export const LayoutContainer = styled.section`
  max-width: 100vw;
  min-height: 100vh;

  padding: 40px 10px 0 10px;

  @media screen and (min-width: 426px) {
    padding: 80px 80px 0 ;
  }
`;

export const RecipeContainer = styled.section`
	display: flex;
	flex-direction: column;

	@media screen and ( min-width: 426px ){
    justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
	}
`
