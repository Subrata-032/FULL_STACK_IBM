function getData(){
    let parseData = JSON.parse(localStorage.getItem("cartData"));
    console.log(parseData);
    let cart=document.getElementById("full_cart");
    parseData.forEach((el,index)=>{
        let div=document.createElement("div");
        div.className="cartItem";

        let button=document.createElement("button");
        button.innerText="Purchase";

        let heading=document.createElement("h3");
        heading.innerText=el.category;

        let img=document.createElement("img");
        img.src=`${el.image}`;

        let name=document.createElement("h3");
        name.innerText=el.name;

        let rating=document.createElement("h3");
        rating.innerText=el.rating;

        let price=document.createElement("h3");
        price.innerText=el.price;

        let select=document.createElement("select");
        select.innerText="<option>1</option><option>2</option><option>3</option><option>4</option>"

        let button1=document.createElement("button");
        button1.innerText="Remove Item";

        button1.addEventListener("click", ()=>{
            deleteFun(el, index);
        })

        button1.addEventListener("click",function(){
            alert("Item removed successfully");
        })

        button.addEventListener("click",function(){
            alert("Item purchased successfully");
        });
        div.append(heading,img,select,name,rating,price,button,button1);
        cart.append(div);
    });
}
getData();
let home=document.getElementById("home");
home.addEventListener("click",function(){
    window.location.href="index.htm";
});
function removeElement(el){
    console.log(el);
}
let container=document.querySelector("#full_cart");

function deleteFun(el, index){
    // console.log("delete function is called");
    let deletedCartData = JSON.parse(localStorage.getItem("DataCart")) || [];
    deletedCartData.splice(index, 1);
    console.log(deletedCartData)
    localStorage.setItem("DataCart", JSON.stringify(deletedCartData));
    getData();
}