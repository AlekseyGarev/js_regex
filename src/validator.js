class Validator {
    static validateUsername(username) {
        const usernameRegex = /^(?![0-9\-_])(?!.*[0-9]{4,})[a-zA-Z0-9\-_]+(?<![0-9\-_])$/;
        return usernameRegex.test(username);
    }
}

module.exports = Validator;