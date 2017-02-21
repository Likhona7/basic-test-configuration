module.exports = {

  'signUp testing for In visible input' : function (browser) {
    browser.url('http://nelisa123.projectcodex.co/signup')
                .assert.title('Nelisa')
                .waitForElementVisible('body', 1000)
                .assert.visible('input[type=text]')
                .assert.visible('input[name=username]')
                .assert.visible('input[name=email]')
                .assert.visible('input[name=password]')
                .assert.visible('input[name=confirmPassword]')
                .assert.visible('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
                .click('button[class="btn btn-default-outline waves-effect glyphicon glyphicon-plus-sign"]')
                .pause(1000)
                .end();
  },
};
