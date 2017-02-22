var signInCommands = {
    validateForm: function() {
        return this.waitForElementVisible('body', 1000)
            .verify.visible('@username')
            .verify.visible('@email')
            .verify.visible('@password')
            .verify.visible('@confirmpassword')
            .verify.visible('@submit')
            .verify.elementNotPresent('@error')

    },
    fillInForm: function(username, password) {
        return this.waitForElementVisible('body', 1000)
				.setValue('@username', nelisaaaaaaaa)
				.setValue('@email', 'nelisa@gmail.com')
				.setValue('@password', passMeIn)
				.setValue('@password', passMeIn)
    },
    submit: function() {
        return this.verify.visible('@submit')
            .click('@submit')
    },
    validateError: function(errorMessage) {
        return this.verify.visible('@error')
            .verify.containsText('@error', errorMessage)
            .verify.valueContains('@username', '')
            .verify.valueContains('@password', '')
    }
};


module.exports = {
    commands: [signInCommands],
    url: function() {
        return this.api.launchUrl;
    },
    elements: {
        username: {
            selector: 'input[name=username]'
        },
        email: {
            selector: 'input[name=email]'
        },
        password: {
            selector: 'input[name=password]'
        },
        confirmpassword: {
            selector: 'input[name=confirmPassword]'
        },
        submit: {
            selector: 'button[type=submit]'
        },
        error: {
            selector: 'id="warning"'
        }
    }
};
