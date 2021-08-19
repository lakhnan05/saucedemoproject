import HomePage from '../page-objects/pages/HomePage'
import { expect } from 'chai'

describe('Login Page',()=>{
    it('Should able to login with valid credential',()=>{
        browser.url('https://saucedemo.com')
        browser.pause(3000)
        HomePage.login('standard_user','secret_sauce')
        browser.pause(3000)
        /expect(browser.getUrl()).to.equal("https://www.saucedemo.com/inventory.html")
    })

    it('Should not able to login with locked-out user',()=>{
        browser.url('https://saucedemo.com')
        browser.pause(3000)
        HomePage.login('locked_out_user','secret_sauce')
        HomePage.loginButton.click()
        browser.pause(3000)
        expect(HomePage.errorMessage.isExisting()).to.equal(true)
        expect(HomePage.errorMessage.getText()).to.equal('Epic sadface: Sorry, this user has been locked out.')

    })
})

