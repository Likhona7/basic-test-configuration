module.exports = {

    'Login test': function(browser) {
      browser
        browser.url('http://nelisa123.projectcodex.co')
            .assert.title('Nelisa')
            .assert.visible('input[type=text]')
            .waitForElementVisible('body', 1000)
            .assert.visible('input[name=username]')
            .assert.visible('input[name=password]')
            .setValue('input[type=text]', 'nelis')
            .setValue('input[type=password]', 'pas')
            .waitForElementVisible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]', 1000)
            .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
            .waitForElementVisible('h4[id="warning"]', 1000)
            .pause(1000)
            .end();

    },

    'test for login the web-application': function(browser) {
        browser
            .url('http://nelisa123.projectcodex.co/login')
            .setValue('input[type=text]', 'nelisa')
            .setValue('input[type=password]', 'pass')
            .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
            //  .waitForElementVisible('h2[Hello]', 1000)
            // .assert.visible('<h2>  Hello, nelisa</h2>', 1000)
            .pause(1000)
            .end();
    },

    'test if a input has a long string in the username and password if anything will break in the login': function(browser) {
        browser
            .url('http://nelisa123.projectcodex.co/login')
            .setValue('input[type=text]', 'nnnnneeeeellllliiiiisssssaaaaa')
            .setValue('input[type=password]', 'pppppaaaaasssssssssss')
            .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
            .pause(1000)
            .end();
    },

    'test if only when there is a password will it login and will the errorhandler show': function(browser) {
        browser
            .url('http://nelisa123.projectcodex.co/login')
            .setValue('input[type=password]', 'pass')
            .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
            .waitForElementVisible('h4[id="warning"]', 2000)
            .pause(1000)
            .end();
    },

    'test if only when there is a username will it login and will the errorhandler show': function(browser) {
        browser
            .url('http://nelisa123.projectcodex.co/login')
            .setValue('input[type=text]', 'nelisa')
            .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
            .waitForElementVisible('h4[id="warning"]', 1000)
            .pause(1000)
            .end();
    }
};
