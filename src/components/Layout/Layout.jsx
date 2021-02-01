import { LayoutContainer, RecipeContainer } from "./LayoutStyled";

import Header from '../Header/Header'
import Ingredients from "../Ingredients/Ingredients";
import Servings from "../Servings/Servings";
import Instructions from "../Instructions/Instructions";

export default function Layout() {
	return (
		<LayoutContainer >

			<Header />

			<RecipeContainer >

				<Ingredients />
				<Servings />
				<Instructions />

			</RecipeContainer>
		</LayoutContainer>
	)
}
