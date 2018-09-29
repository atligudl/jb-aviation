import styled from 'react-emotion';

const HeroWrapper = styled('div')`
	position: relative;
`;

const Hero = styled('div')`
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: 50% 50%;
	padding-top: 60%;

	@media(min-width: 1050px) {
		padding-top: ${props => (props.paddingTop ? props.paddingTop : '60%')};
	}
`;

const HeroBox = styled('div')`
	padding: 5rem;
	background-color: #fff;

	@media(min-width: 1050px) {
		position: absolute;
		left: 0; bottom: 0;
		max-width: 650px;
	}
`;

export { HeroWrapper, Hero, HeroBox };
