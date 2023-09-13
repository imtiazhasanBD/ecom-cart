import {products} from "./product.js"
export let cart =  JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart = [{

        productId: '565842',
        quantity: 1
        
      },{
        productId: '456321',
        quantity: 1
      }];
}





 export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }



 export function addToCart(){
 
let cartSummrryHTML ='';

cart.forEach((cartItems) =>{

        const productId = cartItems.productId;

        let mactingProduct;

        products.forEach((product) => {
            if(product.id == productId){
                mactingProduct = product
            }
        });
        

        cartSummrryHTML += 

        `
        <div class="added-product js-product-container-${mactingProduct.id}">
                <img src="${mactingProduct.image}">
                <div class="added-product-name">${mactingProduct.name}</div>
                <div class="added-product-price">$${mactingProduct.price}</div>
                <i class="fa-sharp fa-solid fa-square-minus js-delete-product" data-product-id="${mactingProduct.id}"></i>
            </div>
        
        
        `;

    
});

document.querySelector('.all-product').innerHTML = cartSummrryHTML




 function removefromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) =>{
    if(cartItem.productId !== productId){
      
      newCart.push(cartItem)
    }
  })

  cart = newCart
  saveToStorage()

}

    document.querySelectorAll('.js-delete-product').forEach((link) => {
        link.addEventListener('click', () =>{
          const productId = link.dataset.productId
          removefromCart(productId)
        const container =  document.querySelector(`.js-product-container-${productId}`);

        container.remove();
          
          console.log(container)
        })
    })


  }