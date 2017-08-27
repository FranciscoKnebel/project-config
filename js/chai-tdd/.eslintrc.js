module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jquery: true,
		mocha: true
	},
	plugins: [
		"mocha"
	],
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings'
	],
	rules: {
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1, ObjectExpression: 1, ArrayExpression: 1 }
		],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-var': ['error'],
		'prefer-const': ['error'],
		'no-unused-vars': ['error', { args: 'after-used', varsIgnorePattern: "should|expect" }],
		'consistent-return': ['error'],
		'no-console': 0,
		'object-shorthand': ['error'],
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'no-global-assign': ['error', { exceptions: ['Object'] }],
		'func-call-spacing': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		// IMPORT
		'import/no-unresolved': [2, { commonjs: true, amd: true }]
	},
	"globals": {
		"describe": true,
		"it": true,
		"expect": true,
		"context": true,
		"beforeEach": true,
		"afterEach": true
	}
};
