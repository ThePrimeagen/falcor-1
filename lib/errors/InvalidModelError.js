/**
 * An InvalidModelError can only happen when a user binds, whether sync
 * or async to shorted value.  See the unit tests for examples.
 *
 * @param {String} message
 */
function InvalidModelError(boundPath, shortedPath) {
    this.message = 'The boundPath of the model is not valid since a value or error was found before the path end.';
    this.stack = (new Error()).stack;
    this.boundPath = boundPath;
    this.shortedPath = shortedPath;
};

// instanceof will be an error, but stack will be correct because its defined in the constructor.
InvalidModelError.prototype = new Error();
InvalidModelError.prototype.name = 'InvalidModel';

module.exports = InvalidModelError;