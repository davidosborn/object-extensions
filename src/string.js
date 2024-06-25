/**
 * Capitalizes the first character in a string.
 * @param {string} s - The string.
 * @return {string} The capitalized string.
 */
String.capitalize = function(s) {
	return s.length > 0
		? s[0].toUpperCase() + s.substring(1)
		: s
}

/**
 * Determines whether a value is a string.
 * @param {*} value - The value.
 * @return {boolean} @c true if the value is a string; otherwise, @c false.
 */
String.isString = function(value) {
	return typeof value === 'string'
		|| value instanceof String
}
