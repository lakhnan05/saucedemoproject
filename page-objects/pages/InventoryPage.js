class InventoryPage{
    get allItemName(){
        return $$('.inventory_item_name')
    }

    get addToCartbuttons(){
        return $$('#inventory_container button')
    }  

}

export default new InventoryPage()