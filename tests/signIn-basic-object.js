module.exports = {
  'SignUp Page Initial Render llllllllllllll': function(browser) {
    var signUp = browser.page.simpleSignUp();
// console.log(signUp);
    signUp.navigate()
      .waitForElementVisible( 'body', 1000 )
      .verify.visible('@username')
      .verify.visible('@email')
      .verify.visible('@password')
      .verify.visible('@confirmpassword')
      .verify.visible( '@submit')
      .verify.elementNotPresent('@error')

    browser.end();
  },

  'Try to sign in with no username, email, password and confirmpassword': function(browser) {
      var signUp = browser.page.simpleSignUp();
      console.log(signUp);
      signUp.navigate()
          .submit()
          .validateError('Username and Password is empty')
      browser.end();
  },


};
