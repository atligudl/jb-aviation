module.exports = {
	"extends": "airbnb",
	"env": {
		"browser": true,
		"es6": true,
	},
	"parser": "babel-eslint",
	"rules": {
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		"linebreak-style": 0,
		"import/no-extraneous-dependencies": 0,
		"no-tabs": 0,
		"react/jsx-indent": 0,
		"no-console": 0,
		"arrow-body-style": 0,
		"comma-dangle": 0,
		"closing-bracket-location": 0,
		"class-methods-use-this": 0,
		"react/prop-types": 0,
		"jsx-a11y/label-has-for": 0,
		"jsx-a11y/href-no-hash": 0,
		"max-len": 0,
		"react/no-unescaped-entities": 0,
		"react/prefer-stateless-function": 0,
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-indent-props": 0,
		"import/no-named-as-default-member": 0,
		"import/no-named-as-default": 0,
		"prefer-template": 0,
		"react/self-closing-comp": 0,
		"keyword-spacing": 0,
		"padded-blocks": 0,
		"indent": 0,
		"space-before-function-paren": 0,
		"func-names": 0,
		"jsx-a11y/no-static-element-interactions": 0,
		"react/jsx-no-bind": 0,
		"object-shorthand": 0,
		"no-plusplus": 0,
		"array-callback-return": 0,
		"no-param-reassign": 0,
		"react/sort-comp": 0,
		"no-loop-func": 0,
		"no-bitwise": 0,
		"react/jsx-filename-extension": 0,
		"import/extensions": 0,
		"vars-on-top": 0,
		"no-restricted-globals": 0,
		"import/prefer-default-export": 0,
		"react/no-did-mount-set-state": 0,
		"jsx-a11y/click-events-have-key-events": 0,
		"react/no-danger": 0,
		"no-return-assign": 0,
		"react/no-array-index-key": 0,
		"react/forbid-prop-types": 0,
		"jsx-a11y/no-autofocus": 0,
		"jsx-a11y/media-has-caption": 0
	},
	"overrides": [
		{
			files: "*.spec.js",
			rules: {
				// chai friendly
				"no-unused-expressions": 0
			}
		}
	]
};