import styled from 'styled-components'

const HeaderContainer = styled.div`
	margin-bottom: 20px;
`

const HeaderTittle = styled.h1``

const InfoContainer = styled.div`
	max-width: 100%;

	margin-top: 10px;
	margin-left: 10px;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const HeaderInfo = styled.p`
	width: calc( 100% - 23px );

	font-size: 12px;

	display: inline-block;

	@media screen and ( min-width: 426px ){
		font-size: 16px;
	}
`

const InfoDots = styled.img`
	margin-top: 5px;
	align-self: flex-start;
`

const PreviewContainer = styled.div`
	width: 100%;

	margin-top: 20px;
`

const RecipePreview = styled.img`
	width: 100%;
`

const Components = {
	HeaderContainer,
	HeaderTittle,
	InfoContainer,
	HeaderInfo,
	InfoDots,
	RecipePreview,
	PreviewContainer,
}

export default Components;
