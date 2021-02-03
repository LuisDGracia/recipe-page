import { useState } from 'react';
import { IngredientItem, CheckBox, Label } from './ListStyled'

export default function ListItem({ ingredient, id }) {

		const [check, setCheck] = useState( false );

		const onChangeHandler = (  ) => {
			console.log( check )
			setCheck( !check )
		}

	return (
		<IngredientItem >
			<CheckBox type="checkbox" id={id} checked={check} onChange={ () => onChangeHandler() } />
			<Label htmlFor={id} >{ ingredient }</Label>
		</IngredientItem>
	);
}
