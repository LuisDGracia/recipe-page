import { UtilContainer, Icon, TextContainer, Tittle, Time } from './TextStyle'

export default function Text({ tittle, time, icon }) {
	return (
		<UtilContainer>
			<Icon className="material-icons">query_builder</Icon>
			<TextContainer>
				<Tittle>{tittle}</Tittle>
				<Time>{time}</Time>
			</TextContainer>
		</UtilContainer>
	);
}
