import styled from 'styled-components'

const IngredientsContainer = styled.div`
	width: 100%;

	margin-top: 20px;

	order: 2;

	@media screen and (min-width: 426px){
		width: 60%;
	}
`

const IngredientsList = styled.ul`
	padding: 0;

	list-style: none;
`;

const Tittle = styled.p`
	margin: 0;
	font-size: 18px;
	font-weight: 400;
`

export { IngredientsContainer, IngredientsList, Tittle };
