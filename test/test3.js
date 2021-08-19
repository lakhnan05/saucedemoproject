import InventoryPage from "../page-objects/pages/InventoryPage"
import HomePage from "../page-objects/pages/HomePage"
import InventoryDetailPage  from "../page-objects/pages/InventoryDetailPage"
import { expect } from 'chai'

describe('Inventory Detail Page',()=>{
    it('validate inventory detail page content',()=>{
        browser.url('https://saucedemo.com')
        browser.pause(3000)
        HomePage.login('standard_user','secret_sauce')
        browser.pause(3000)
        InventoryPage.allItemName[0].click()
        browser.pause(3000)
        expect(InventoryDetailPage.itemName.isExisting()).to.equal(true)
        expect(InventoryDetailPage.itemPrice.isExisting()).to.equal(true)
        expect(InventoryDetailPage.itemDescription.isExisting()).to.equal(true)
        //expect(InventoryDetailPage.addToCartButton.isExisting()).to.equal(true)
        expect(InventoryDetailPage.backToProductButton.isExisting()).to.equal(true)
    })

    it('Should able to add item to cart from details page',()=>{
        expect(InventoryDetailPage.addToCartButton.isExisting()).to.equal(true)
        expect(InventoryDetailPage.addToCartButton.getText()).to.equal('ADD TO CART')
        InventoryDetailPage.addToCartButton.click()
        expect(InventoryDetailPage.addToCartButton.getText()).to.equal('REMOVE')
        InventoryDetailPage.addToCartButton.click()
        expect(InventoryDetailPage.addToCartButton.getText()).to.equal('ADD TO CART')
        
    })
})