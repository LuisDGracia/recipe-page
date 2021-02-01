import Components from "./HeaderStyled";

export default function Header() {
	return (
		<Components.HeaderContainer>

			<Components.HeaderTittle>
				Classic Cheesecake Recipe
			</Components.HeaderTittle>

			<Components.InfoContainer>

				<Components.InfoDots src="assets/images/6dots.svg" />

				<Components.HeaderInfo>
					Look no further for a creamy and ultra smooth classic cheesecake
					recipe! Paired with a buttery graham cracked crust, no one can deny
					its simple decadence. For the best results, bake in water bath.
				</Components.HeaderInfo>

			</Components.InfoContainer>

			<Components.PreviewContainer>
				<Components.RecipePreview src="/assets/images/photo1.png" />
			</Components.PreviewContainer>

		</Components.HeaderContainer>
	);
}
