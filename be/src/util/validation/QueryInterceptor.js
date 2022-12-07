const { prescription, category, brand, keyword, price } = require('./CustomItemValidators');

// The Base Validator structure, acts like a super class
const ItemValidator = function () {
    this.validator = NaN;
};

// These are the prototype class methods for ItemValidator
// Setting the strategy by setValidator method
// Executing the strategy by validate method
ItemValidator.prototype = {
    setValidator: function (validator) {
        this.validator = validator;
    },
    validate: function (req, res, next) {
        return this.validator.validate(req, res, next);
    }
};

// All subtypes of validators in a list to set the strategy
const validators = { prescription, category, brand, keyword, price };

const validatePrescriptionType = (req, res) => {
    // Get the validator subtype from path name
    const queryArgIndex = req.url.indexOf('?');
    const route = req.url.substr(0, queryArgIndex === -1 ? req.url.length : queryArgIndex);
    const paths = route.split('/');
    const subType = paths[paths.length - 1];

    // If there's no validator regarding the path,
    // Assume the request is valid by returning true
    if (validators[subType] === undefined) return true;

    // Create an ItemValidator and set its strategy (validator instance)
    const customItemValidator = new ItemValidator();
    customItemValidator.setValidator(new validators[subType]());

    // Validate request
    return customItemValidator.validate(req, res);
};

module.exports = { validatePrescriptionType, ItemValidator };
