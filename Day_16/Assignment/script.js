
async function fetchData() {
  try{
  let Alldata=await fetch("https://fakestoreapi.com/products");
  let Data= await Alldata.json();
  console.log(Data);
  function showListing(Data){
    Data.forEach((el,index)=>{
        let productBox=document.createElement("div");
        productBox.className="product-box";

        let image=document.createElement("img");
        image.src=`${el.image}`;

        let name=document.createElement("h4");
        name.innerText=`${el.title}`;

        let price=document.createElement("h4");
        price.innerText=`Price: ${el.price}`;

        let rating=document.createElement("h4");
        rating.innerText=`Rating: ${el.rating.rate}, ${el.rating.count}`;
        let category=document.createElement("h4");
        category.innerText= `Category: ${el.category}`;


        let button=document.createElement("button");
        button.innerText="View Details";
        button.addEventListener("click",()=>{
            window.location.href="View_detail.htm";
        });
        productBox.append(image,name,price,category,rating,button);
        document.getElementById("products").append(productBox);
    });
  
  }
  showListing(Data);
//search using trotlling....

  // let products1=document.querySelector("#products");
  // let search= document.querySelector('#search');
  // search.addEventListener('input',()=>{
  // let query = search.value.toLowerCase();
  // let searchValue= Data.filter((item)=>{
  //   return item.title.toLocaleLowerCase().includes(query);
  // });
  // products1.innerHTML="";
  // if(searchValue.length===0){
  //   products1.innerHTML="<p>No Item Found</p>";
  // }
  // else{
  //   showListing(searchValue);
  // }
  // })

  // search using debouncing....

  function getData() {
    let query = document.getElementById("search").value.toLowerCase();
    let filtered = Data.filter((p) => p.title.toLowerCase().includes(query));
    let AllContent = document.getElementById("products");
    AllContent.innerHTML = "";
    showListing(filtered);
  }
  const debounce = function (fn, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };
  const searchFunction = debounce(getData, 500);
  let debounce1 = document.getElementById("search");
  debounce1.addEventListener("input", searchFunction);

  // chat-GPT

  // function searchProducts() {
  //   let query = document.getElementById('#search').value.toLowerCase();
  //   let productsToDisplay = Data.filter(p => p.title.toLowerCase().includes(query));
  //   let AllContent = document.getElementById("products");
  //   AllContent.innerHTML = "";
  //   showListing(productsToDisplay);
  // }

  // // Debounce
  // function debounce(func, delay) {
  //   let timer;
  //   return () => {
  //     clearTimeout(timer);
  //     timer = setTimeout(func, delay);
  //   };
  // }
  // document.getElementById('#search')?.addEventListener('input', debounce(searchProducts, 300));
  let products1=document.querySelector("#products");
  let sort=document.querySelector('#priceSort');
  sort.addEventListener("change",()=>{
    let value1=sort.value;
    if(value1 == "low"){
        let sortedData = Data.sort((a,b)=>{
            return a.price-b.price; 
        })
        products1.innerHTML ="";
        showListing(sortedData);
    }
    if(value1 == "high"){
        let sortedData1 = Data.sort((a,b)=>{
            return b.price-a.price;
        })
        products1.innerHTML ="";
        showListing(sortedData1);
    }
  });
  // let filter= document.querySelector('#categoryFilter');
  // filter.addEventListener('change',function(){
  //   let value=filter.value;
  //   // if(value == "Electronics"){
  //   //   let filter_data=Data.filter(item)
  //   // }
  //   let filteredData= Data.filter((item) => item.category.toLowerCase() == value);
  //   products1.innerHTML ="";
  //   showListing(filteredData);
  // });
  let filterByType = document.getElementById("categoryFilter");
    filterByType.addEventListener("change", function () {
      let filtered = [...Data];
      const selected = filterByType.options[filterByType.selectedIndex].value;
      if (selected == "men's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "men's clothing"
        );
      }
      if (selected == "women's clothing") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "women's clothing"
        );
      }
      if (selected == "jewellery") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "jewelery"
        );
      }
      if (selected == "Electronics") {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() == "electronics"
        );
      }
      let AllContent = document.getElementById("products");
      AllContent.innerHTML = "";
      showListing(filtered);
    });

  } catch(e){
    console.log("error found");
  }
  
}
fetchData();
let views = [];
function saveToLocalStorage(el, index) {
  views.push(el);
  localStorage.setItem("views",JSON.stringify(views));
  window.location.href="View_detail.htm";
}