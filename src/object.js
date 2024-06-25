/**
 * Determines whether a value is an object.
 * @param {*} value - The value.
 * @return {boolean} @c true if the value is an object; otherwise, @c false.
 */
Object.isObject = function(value) {
	return value
		&& typeof value === 'object'
		&& !Array.isArray(value)
}

/**
 * Recursively copies the properties from one or more source objects to a target object.
 * Arrays are concatenated.
 * @param {object} target - The target.
 * @param {object} sources - The sources.
 * @return {object} The target.
 */
Object.merge = function(target, ...sources) {
	for (const source of sources) {
		for (const key in source) {
			if (!Object.hasOwn(source, key)) {
				continue
			}

			if (Array.isArray(target[key]) && Array.isArray(source[key])) {
				target[key] = [...target[key], ...source[key]]
				continue
			}

			if (Object.hasOwn(target, key) && Object.isObject(source[key])) {
				target[key] = Object.merge(target[key], source[key])
				continue
			}

			target[key] = source[key]
		}
	}

	return target
}

/**
 * Picks the properties of an object.
 * @param {object} source - The object.
 * @param {string[]} keys - The keys.
 * @param {object} The picked properties.
 */
Object.pick = function(source, ...keys) {
	return keys.reduce(function(target, key) {
		target[key] = source[key]
		return target
	}, {})
}
