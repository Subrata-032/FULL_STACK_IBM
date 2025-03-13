let parent=document.getElementById("parent");
async function getData(params) {
    let data=await fetch(`http://localhost:3000/posts`);
    let res=await data.json();
    showData(res);
    console.log(res);
    
}
getData();
async function showData(arr){
    parent.innerHTML=null;
    arr.forEach(element =>{
        let box=document.createElement("div");
        box.className="box";

        let id=document.createElement("p");
        id.innerText=element.id;

        let title=document.createElement("p");
        title.innerText=element.title;

        let views=document.createElement("p");
        views.innerText=element.views;

        let button=document.createElement("button");
        button.innerHTML="click";
        box.append(id,title,views,button);
        parent.append(box);
    });
}
let button=document.getElementById("btn");
 button.addEventListener("click",async()=>{
    let value=document.getElementById("input").value;

    let obj={
        title:value,
        views:Math.random(100,1000)

    }
    let res=await fetch(`http://localhost:3000/posts`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    });
    let response=await res.json();
    if(response){
        getData();
        alert("Data saved successfully");
    }
    console.log(response);
})