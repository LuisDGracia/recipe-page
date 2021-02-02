import { useState } from 'react';
import { IngredientItem, CheckBox, Label, Text } from './ListStyled'

export default function ListItem({ ingredient, id }) {

		const [check, setCheck] = useState( false );

		const onChangeHandler = (  ) => {
			console.log( check )
			setCheck( !check )
		}

	return (
		<IngredientItem >
			<Label htmlFor={id} >{ ingredient }</Label>
			<CheckBox type="checkbox" id={id} checked onChange={ () => onChangeHandler() } />
		</IngredientItem>
	);
}
