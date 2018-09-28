import styled from 'react-emotion';

const Fieldset = styled('div')`
	margin-top: ${props => (props.spacing ? props.spacing : '1.5rem')};
`;

export default Fieldset;
