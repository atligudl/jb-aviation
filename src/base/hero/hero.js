import styled from 'react-emotion';

const HeroWrapper = styled('div')`
	position: relative;

	@media(min-width: 1400px) {
		padding-top: 20%;
	}
`;

const Hero = styled('div')`
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: 50% 50%;
	padding-top: 60%;

	@media(min-width: 768px) {
		padding-top: ${props => (props.paddingTop ? props.paddingTop : '20%')};
	}

	@media(min-width: 1400px) {
		padding: 0;
		position: absolute;
		top: 0; right: 0;
		bottom: 0; left: 0;
		z-index: -1;
	}
`;

const HeroBox = styled('div')`
	padding: 5rem;
	background-color: #fff;

	@media(min-width: 1400px) {
		position: relative;
		bottom: -5px;
		max-width: 650px;
	}
`;

export { HeroWrapper, Hero, HeroBox };
