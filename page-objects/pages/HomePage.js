class HomePage{
    get usernameInput(){
        return $('#user-name')
    }
    get passwordInput(){
        return $('#password')
    }
    get loginButton(){
        return $('#login-button')
    }

    get errorMessage(){
        return $('h3')
    }

    login(username,password)
    {
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
        this.loginButton.click()
    }
}

export default new HomePage()