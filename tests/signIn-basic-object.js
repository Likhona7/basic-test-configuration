module.exports = {
    'SignUp Page Initial Render': function(browser) {
        var signUp = browser.page.simpleSignUp();
        console.log(browser, "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
        signUp.navigate()
            .waitForElementVisible('body', 1000)
            .verify.visible('@username')
            .verify.visible('@email')
            .verify.visible('@password')
            .verify.visible('@confirmpassword')
            .verify.visible('@submit')
            .verify.elementNotPresent('@error')

        browser.end();
    },

    'Try to sign in with no username, email, password and confirmpassword': function(browser) {
        var signUp = browser.page.simpleSignUp();
        signUp.navigate()
            .waitForElementVisible('body', 1000)
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'Username/Password too short, should be 3 letters long')
            .verify.valueContains('@username', '')
            .verify.valueContains('@email', '')
            .verify.valueContains('@password', '')
            .verify.valueContains('@confirmpassword', '')
        browser.end();
    },

    'Try to login with a username and no password': function(browser) {
        var signUp = browser.page.simpleSignUp();
        signUp.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'abcdef')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'fill In Required Filled')
            .verify.valueContains('@username', '')
            .verify.valueContains('@email', '')
            .verify.valueContains('@password', '')
            .verify.valueContains('@confirmpassword', '')
        browser.end();
    },

    'Try to login with a password and no username': function(browser) {
        var signUp = browser.page.simpleSignUp();
        signUp.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@password', 'test')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'fill In Required Filled')
            .verify.valueContains('@username', '')
            .verify.valueContains('@email', '')
            .verify.valueContains('@password', '')
            .verify.valueContains('@confirmpassword', '')
        browser.end();
    },


    'Enter username, email and password without confirm Password': function(browser) {
        var signUp = browser.page.simpleSignUp();

        signUp.navigate()
            .waitForElementVisible('body', 1000)
            .setValue('@username', 'abcdef')
            .setValue('@email', 'abc@gmail.com')
            .setValue('@password', '213')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error', 'Confirm Password')
            .verify.valueContains('@username', '')
            .verify.valueContains('@email', '')
            .verify.valueContains('@password', '')
            .verify.valueContains('@confirmpassword', '')

        browser.end();
    }



};
