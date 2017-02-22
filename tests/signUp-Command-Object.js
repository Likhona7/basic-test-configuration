module.exports = {
    'SignUp Page Initial Render': function(browser) {
        var signIn = browser.page.commandSignUp();
        signIn.navigate()
            .validateForm()
        browser.end();
    },

    'Try to sign in with no username, email, password and confirm password': function(browser) {
      var signIn = browser.page.commandSignUp();
      signIn.navigate()
          .submit()
          .validateError('Username/Password too short, should be 3 letters long')
      browser.end();
  },

  'Try to login with a username and no password': function(browser) {
      var login = browser.page.commandsLogin();
      login.navigate()
          .fillInForm('neli', 'neli@f=gmail.com', 'past', 'past')
          .submit()
          verify.visible('class=["form-header dark-gradient"]')
      browser.end();
  },

};
