class InputSoftLimit {

    constructor(settings = {}) {
        let self = this;

        // Merge default settings with passed settings
        self.settings = Object.assign({
            inputs: {},
            submitButton: null,
            inputInvalidClass: 'is-invalid'
        }, settings);

        self.elems = [...self.settings.inputs];
    }

    init() {
        let self = this;

        // If there are no inputs, bail out
        if (self.elems.length === 0) {
            return;
        }

        // Loop through the inputs
        self.elems.map(elem => {
            // Get the inputs limit
            let limit = elem.getAttribute('data-input-soft-limit');

            // Get the element where we'll display the remaining characters
            let counter = document.querySelector(elem.getAttribute('data-input-soft-limit-counter'));

            // Populate the counter element with the limit value
            counter.innerHTML = limit;

            // Set the input's status to 'valid'
            elem.setAttribute('data-input-soft-limit-status', 'valid');

            // Listen for changes to the input
            elem.addEventListener('input', evt => {
                // Get the current number of characters in the input
                let chars = elem.value.length;

                // Calculate the number of remaining characters
                let remaining = limit - chars;

                // Show the remaining number of characters
                counter.innerHTML = remaining;

                // If there are no remaining characters...
                if (remaining < 0) {
                    // Apply the invalid class to the input
                    elem.classList.add(self.settings.inputInvalidClass);

                    // Set the status of the input to invalid
                    elem.setAttribute('data-input-soft-limit-status', 'invalid');
                } else {
                    // Remove the invalid class from the input
                    elem.classList.remove(self.settings.inputInvalidClass);

                    // Set the status of the input to valid
                    elem.setAttribute('data-input-soft-limit-status', 'valid');
                }

                // If a submit button has been included in the settings...
                if (self.settings.submitButton) {
                    // Check the validity of all the inputs
                    self.checkAll();
                }
            });
        });
    }

    checkAll() {
        let self = this;

        // Filter the inputs to check if any are invalid
        let invalidInputs = self.elems.filter(elem => {
            return elem.getAttribute('data-input-soft-limit-status') === 'invalid';
        });

        // If there are invalid inputs...
        if (invalidInputs.length < 1) {
            // Disable the submit button
            self.settings.submitButton.disabled = false;
        }
        else {
            // Enable the submit button
            self.settings.submitButton.disabled = true;
        }
    }
};

module.exports = function (settings = {}) {
    return new InputSoftLimit(settings);
};