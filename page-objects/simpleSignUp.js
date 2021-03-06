module.exports = {
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
