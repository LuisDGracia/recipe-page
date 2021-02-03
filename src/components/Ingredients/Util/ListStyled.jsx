import styled from 'styled-components'

const IngredientItem = styled.li`
	margin-top: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Label = styled.label`
	width: 90%;
	display: inline-block;
`;

const CheckBox = styled.input`
	position: relative;

	width: 20px;
	height: 20px;

	&:checked + ${Label} {
		color: rgba( 0, 0, 0, 0.2 );
		text-decoration: line-through;
		text-decoration-color: black;
	}
`;

export { IngredientItem, CheckBox, Label }
