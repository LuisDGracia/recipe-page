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

	&:hover{
		cursor: pointer;
	}
`;

const CheckBox = styled.input`
	width: 25px;
	height: 25px;

	border: 2px solid;
	border-color: gray;
	border-radius: 3px;

	position: relative;

	appearance: none;
	outline: 0;
	transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

	&:checked {
		color: white;
		border-color: gray;
		background: rgba( 0, 255, 0, 0.5 );
	}

	&:checked + ${Label} {
		color: rgba(0, 0, 0, 0.2);
		text-decoration: line-through;
		text-decoration-color: black;
		

	&:hover {
		cursor: pointer;
	}
`;

export { IngredientItem, CheckBox, Label }
