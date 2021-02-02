import Text from './Utils/Text'

import { ServingsContainer, YieldsContainer } from "./ServingsStyle";
import { TextContainer, Icon, Tittle, Time } from './Utils/TextStyle'

export default function Servings() {
	return (
		<ServingsContainer>
			<YieldsContainer>
				<Icon className="material-icons">restaurant_menu</Icon>
				<TextContainer style={{ display: 'inline-block' }} >
					<Tittle>Yields</Tittle>
					<Time>12 servings</Time>
				</TextContainer>
			</YieldsContainer>

			<Text tittle="Prep Time" time="45 minutes" />
			<Text tittle="Cook Time" time="1 hour" />
			<Text tittle="Total Time" time="7,75 hours" />

		</ServingsContainer>
	);
}
