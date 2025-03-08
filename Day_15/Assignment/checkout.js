let home=document.getElementById("home");
let cart=document.getElementById("cart");
let submit=document.getElementById("submit");
let priceDisplay=document.getElementById("priceDisplay");
let data=JSON.parse(localStorage.getItem("cartData"));
function calTotalPrice(){
    let price=0;
    data.forEach((el,index)=>{
        price+= el.price;
    });
    return price;
}
home.addEventListener("click",function(){
    window.location.href="index.htm";
});
cart.addEventListener("click",function(){
    window.location.href="cart.htm";
});
submit.addEventListener("click",function(e){
    e.preventDefault();
    alert("Address Successfully Saved");
    priceDisplay.innerHTML = "";

    let div=document.createElement("div");
    div.className="priceDiv";

    let span=document.createElement("span");
    span.innerText=`Total Amount Payable is: $${Math.ceil(calTotalPrice())}`;
    span.className="priceSpan";

    let select=document.createElement("select");
    select.className="priceSelect";
    let option1=document.createElement("option");
    option1.innerText="Select Payment Method";
    let option2=document.createElement("option");
    option2.innerText="Cash On Delivery";
    let option3=document.createElement("option");
    option3.innerText="UPI Payment";
    select.append(option1,option2,option3);
    let button=document.createElement("button");
    button.innerText="Confirm Purchase";
    button.addEventListener("click",function(){
        alert("Items purchased successfully!");
        removeFromCart();
        window.location.href="index.htm";
    });
    div.append(span,select,button);  
    priceDisplay.append(div); 
});
function removeFromCart(){
  let data = JSON.parse(localStorage.getItem("cartData"));
  data=[];
  data=localStorage.setItem("cartData",JSON.stringify(data));
}

