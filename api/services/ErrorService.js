module.exports = {

    ParseUserErrors: function(errors) {
        var validationErrors = [];
        for (var key in errors) {
            if (errors.hasOwnProperty(key)) {
                for (var item in errors[key]) {
                    if (errors[key][item].rule !== "string") {
                        validationErrors.push(errors[key][item].message);
                    }
                }
            }
        }
        return validationErrors;
    }

};
