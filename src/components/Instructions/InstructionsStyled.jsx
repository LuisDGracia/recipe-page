import styled from 'styled-components'

const InstructionsContainer = styled.div`
	order: 3;

	@media screen and ( min-width: 426px ){
		width: 60%;
	}
`

const InstructionsList = styled.ol`
	padding: 0;
	list-style: none;
	counter-reset: item;

	li{
		counter-increment: item;
		margin-bottom: 15px;
		
		display: flex;
	}

	li::before {
		height: 20px;
		width: 20px;

		margin-right: 10px;
		border-radius: 5px;
		padding: 5px;

		background-color: orange;
		text-align: center;
		color: white;

		content: counter(item);

		display: inline-block;
	}
`;

const Text = styled.p`
	width: calc( 100% - 40px );

	display: inline-block;
`

export { InstructionsContainer, InstructionsList, Text }
