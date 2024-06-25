/**
 * Capitalizes the first character in the string.
 * @return {string} The capitalized string.
 */
String.prototype.capitalize = function() {
	return this.length > 0
		? this[0].toUpperCase() + this.substring(1)
		: this
}

/**
 * Determines whether the string is equal to another case, without case sensitivity.
 * @param {string} other - The other string.
 * @return {boolean} @c true if the string is equal; otherwise, @c false.
 */
String.prototype.isEqualIgnoreCase = function(other) {
	return this.localeCompare(other, undefined, {sensitivity: 'base'}) === 0
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
