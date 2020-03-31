const currentInputValues = {
    firstName: '', // Must be at least 2 characters
    lastName: '', // Must be at least 2 characters
    zipCode: '', // Must be exactly 5 characters
    state: '', // Must be exactly 2 characters
}

const inputCriteria = {
    firstName: [],
    lastName: [],
    zipCode: [],
    state: [],
};

const getErrorMessages = (inputs, criteria) => {

}

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */