import globals from 'globals'
import js from '@eslint/js'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: globals.node,
			sourceType: 'module'
		},
		plugins: {
			jsdoc: jsdoc
		}
	},
	js.configs.recommended
]
