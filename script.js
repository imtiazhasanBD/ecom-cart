import {products} from "./product.js";
import { cart, addToCart, saveToStorage, } from "./cart.js";

products.forEach(product =>{

    const html = `
    <div class="product-item js-product-addBtn" data-product-item="${product.name}">
        <div class="product-photo">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-price">
            $${(product.price / 100).toFixed(2)}
        </div>
        <div class="product-rating">
            <img src="${product.rating}" alt="">
        </div>
        <div class="addToCart-btn">
        <div class="addCart-btn">
        <button class="add-btn" data-product-id ="${product.id}">Add Cart</button>
        </div>
        <div class="added-btn js-added-to-cart"><img src="images/checkmark.png">Added</div>   
        </div>
    </div> 
    
    `
    document.querySelector('.product-items').innerHTML += html;
});






let  cartQuantity =  0;
document.querySelectorAll('.add-btn').forEach((button) => {

    button.addEventListener('click', () =>{
     const productId =   button.dataset.productId;

     let matchingItem;
    
        
     
        cart.forEach((item) =>{
          if (productId === item.productId){
            matchingItem = item
        }

        });

        if(matchingItem){
            matchingItem.quantity += 1
        } else{
            cart.push({ 
                productId: productId,
                quantity: 1
    
            });
            saveToStorage()
        } 

        let  cartQuantity =  0;

        cart.forEach((item) =>{
            cartQuantity += item.quantity
        })
        

        document.querySelector('.js-count').innerHTML = cartQuantity
        addToCart()

    });

    addToCart()
   
});






