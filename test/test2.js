import InventoryPage from "../page-objects/pages/InventoryPage"
import HomePage from "../page-objects/pages/HomePage"
import { expect } from 'chai'

describe('Inventory Page',()=>{
    it('Validate the no of product displayed in the inventory page',()=>{
        browser.url('https://saucedemo.com')
        browser.pause(3000)
        HomePage.login('standard_user','secret_sauce')
        browser.pause(3000)
        let total=InventoryPage.allItemName
        expect(total.length).to.equal(6)
    })

    it('Should able to add item to cart from inventory page',()=>{
        browser.url('https://saucedemo.com')
        browser.pause(3000)
        HomePage.login('standard_user','secret_sauce')
        browser.pause(3000)
        expect(InventoryPage.addToCartbuttons[0].getText()).to.equal('ADD TO CART')
        InventoryPage.addToCartbuttons[0].click()
        expect(InventoryPage.addToCartbuttons[0].getText()).to.equal('REMOVE')
        InventoryPage.addToCartbuttons[0].click()
        expect(InventoryPage.addToCartbuttons[0].getText()).to.equal('ADD TO CART')
    
    })

})
