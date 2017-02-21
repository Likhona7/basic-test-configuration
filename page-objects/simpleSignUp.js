module.exports = {
	url: function() {
		return this.api.launchUrl;
	},
	// url: 'http://nelisa123.projectcodex.co/signup',

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
			selector: '.error'
    }
	}
};
