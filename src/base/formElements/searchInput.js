import React from 'react';
import styled from 'react-emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Input from './input';

const SearchWrapper = styled('div')`
	position: relative;
`;

const SearchIcon = styled('div')`
	position: absolute;
	top: 50%;
	right: ${props => props.theme.spacing};
	transform: translateY(-50%);
	pointer-events: none;
`;

const SearchInput = (props) => {
	return (
		<SearchWrapper>
			<Input {...props} />
			<SearchIcon>
				<FontAwesomeIcon icon={faSearch} size="lg" />
			</SearchIcon>
		</SearchWrapper>
	);
};

export default SearchInput;
