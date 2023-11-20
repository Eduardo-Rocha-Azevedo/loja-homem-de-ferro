if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}

function ready(){
    const removeProductButtons = document.getElementsByClassName('remove-product-button');
    for (let i = 0 ;i < removeProductButtons.length; i++){
        removeProductButtons[i].addEventListener('click', removeProduct)
    }

    const quantityInputs = document.getElementsByClassName('product-qtd-input');
    for(let i = 0; i < quantityInputs.length; i++){
        quantityInputs[i].addEventListener('change', updateTotal)
    }
}

//remove o produto do carrinho
function removeProduct(){
    this.parentElement.parentElement.remove(event);
    updateTotal();

}
//atualiza os precos
function updateTotal(){
let totalAmout = 0;

const cartProducts = document.getElementsByClassName('cart-product');
    for(let i = 0; i< cartProducts.length;i++){
    // console.log(cartProducts[i])
        const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".");
        const productQuantity= cartProducts[i].getElementsByClassName("product-qtd-input")[0].value;
        console.log(productPrice);
        totalAmout += productPrice * productQuantity;
        totalAmout = totalAmout.toFixed(2);
        totalAmout = totalAmout.replace(".", ",");
        document.querySelector(".cart-total-container span").innerText = "R$" + totalAmout;
    }
}