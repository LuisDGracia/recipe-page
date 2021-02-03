import styled from 'styled-components'

const ServingsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	order: 1;

	@media screen and (min-width: 426px) {
		width: 33%;
		
		border-radius: 10px;
		box-shadow: 0 0 10px hsla( 0, 0%, 0%, 0.2 );

		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		order: 2;
	}
`;

const YieldsContainer = styled.div`
	width: 100%;

	margin-bottom: 20px;

	color: orange;

	@media screen and (min-width: 426px) {
		width: 70%;

		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
`;

export { ServingsContainer, YieldsContainer };
