class InventoryDetailPage{
    get itemDescription(){
        return $('div[class="inventory_details_desc large_size"]')
    }
    get itemName(){
        return $('div[class="inventory_details_name large_size"]')
    }

    get itemPrice(){
        return $('div[class="inventory_details_price"]')
    }
    
    get addToCartButton(){
        return $('.inventory_details_desc_container button')
    }
    get backToProductButton(){
        return $('#back-to-products')
    }
}

export default new InventoryDetailPage()