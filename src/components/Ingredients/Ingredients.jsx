import { IngredientsContainer, IngredientsList } from "./IngredientStyled";
import ListItem from "./Util/List";

export default function Ingredients() {
	return (
		<IngredientsContainer>
			<h2>Ingredients</h2>
			<p>Graham Cracker Crust</p>

			<IngredientsList>
				<ListItem
					id="crubs"
					ingredient="1 and 1/2 cups (150g) graham cracker crubs (about 10 full shet graham crackers)" />

				<ListItem
					id="butter"
					ingredient="5 Tablespoons (70g) unsalted butter, melted" />

				<ListItem
					id="sugar"
					ingredient="1/4 cup (50g) granulated sugar" />
			</IngredientsList>
		</IngredientsContainer>
	);
}
