import styled from 'react-emotion';

const Wrapper = styled('div')`
	width: 44rem;
	padding: 3rem;
	background: #fff;
	box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
`;

const Message = styled('div')`
	padding-bottom: 3rem;
	margin-bottom: 3rem;
	font-size: 1.8rem;
	text-align: center;
	border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;

const ButtonRow = styled('div')`
	display: flex;
	justify-content: space-between;
`;

export default { Wrapper, Message, ButtonRow };
