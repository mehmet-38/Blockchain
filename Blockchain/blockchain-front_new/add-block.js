const container = document.querySelector(".container");

const request = new Request("https://simple-blockchain-app.herokuapp.com/blocks");

container.addEventListener("click", e => {

    //alert(e.target.className);
    if (e.target.className.includes("card-button")) {
        const parentDiv = e.target.parentElement;

        const buyerUsername = parentDiv.children[0].children[0].value;
        const productCategory = parentDiv.children[1].children[2].textContent;
        const sellerUsername = parentDiv.children[2].children[2].textContent;
        const productQuantity = parentDiv.children[3].children[2].textContent;
        const productPrice = parentDiv.children[4].children[2].textContent;
        
        alert(buyerUsername);
        
        alert(productCategory);
        alert(sellerUsername);
        alert(productQuantity);
        alert(productPrice);
         //alert(request);
         
        

       
        request
            .post({
                sellerUsername: sellerUsername,
                buyerUsername: buyerUsername,
                productCategory: productCategory,
                productQuantity: parseInt(productQuantity, 10),
                productPrice: parseInt(productPrice, 10)
            })
            .then(response => alert(response))
            .catch(err => console.log(err));
            
    }
    
});