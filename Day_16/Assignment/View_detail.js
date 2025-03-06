
let data = JSON.parse(localStorage.getItem("views"));
console.log(data);
function showData(data) {
  data.forEach((el,index)=>{
    let div = document.createElement("div");
    div.className = "product";
  
    let image = document.createElement("img");
    image.src = el.image;
  
    let name = document.createElement("h3");
    name.innerText =el.title;
  
    let price = document.createElement("h3");
    price.innerText = `Price: $${el.price}`;
  
    let category = document.createElement("h3");
    category.innerText = `Category: ${el.category}`;
  
    let rating = document.createElement("h3");
    rating.innerText = `Rating: ⭐${el.rating.rate}, Count:${el.rating.count}`;
  
    let description=document.createElement("h3");
    description.innerText=`Description: ${el.description}`
  
    let AllProducts = document.getElementById("details");
    div.append(image, name, price, category, rating, description);
    AllProducts.append(div);
  });
  
}
showData(data);
let move=document.getElementById("Back_to_Products");
move.addEventListener("click",function(){
    window.location.href="index.htm";
});
