const animationDelay = (index, intensity) => `
	animation-delay: ${(index ? (index * intensity) : 0)}ms;
	animation-fill-mode: forwards;
`;

const somethingElse = `

`;

export { animationDelay, somethingElse };
