import { IngredientsContainer, IngredientsList, Tittle } from "./IngredientStyled";
import ListItem from "./Util/List";

export default function Ingredients() {
	return (
		<IngredientsContainer>
			<h2>Ingredients</h2>

			<br />
			<Tittle>Graham Cracker Crust</Tittle>

			<IngredientsList>
				<ListItem
					id={0}
					ingredient="1 and 1/2 cups (150g) graham cracker crubs (about 10 full shet graham crackers)"
				/>

				<ListItem
					id={1}
					ingredient="5 Tablespoons (70g) unsalted butter, melted"
				/>

				<ListItem id={2} ingredient="1/4 cup (50g) granulated sugar" />
			</IngredientsList>

			<br />

			<Tittle>Cheesecake</Tittle>

			<IngredientsList>
				<ListItem
					id={3}
					ingredient="four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature"
				/>

				<ListItem id={4} ingredient="1 cup (200g) granulated sugar" />

				<ListItem
					id={5}
					ingredient="1 cup (240g) full-fat sour cream, at room temperature"
				/>

				<ListItem id={6} ingredient="1 teaspoon pure vanilla extract" />

				<ListItem
					id={7}
					ingredient="2 teaspoons fresh lemon juice (optional, but recommended)"
				/>

				<ListItem id={8} ingredient="3 large eggs, at room temperature" />

				<ListItem
					id={9}
					ingredient="topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) "
				/>
			</IngredientsList>
		</IngredientsContainer>
	);
}
