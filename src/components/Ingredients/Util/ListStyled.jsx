import styled from 'styled-components'

const IngredientItem = styled.li`
	margin-top: 10px;

	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Label = styled.label`
	width: 20px;
	height: 20px;

	border: 2px solid black;
	border-radius: 5px;

	display: inline-block;
`;

const CheckBox = styled.input`
  position: absolute;
  top: -100%;

  visibility: hidden;

  &:checked + ${Label} {
    background-color: black;
  }
`;

const Text = styled.p`
	width: calc( 100% - 24px );

	display: inline-block;
`

export { IngredientItem, CheckBox, Label, Text }
