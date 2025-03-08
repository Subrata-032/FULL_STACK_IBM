let Apikey="AIzaSyArgXleQU2L3wEUaAWHXLCMYxk3IBH6KWE";
let div=document.getElementById("lower_body");
let search_term=document.getElementById("query").value ||"india Gate";
async function getData(){
    try{
        let data=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${Apikey}`);
    let res=await data.json();
    
    console.log(res.items);
    showData(res.items);
    } catch(e){
        console.log(e);
    }
}

getData();
// async function showData(arr){
//     arr.forEach((snippet)=>{
//         let box=document.createElement("div");
//         box.className="video";

//         let img=document.createElement("img");
//         img.src=snippet.thumbnails.medium.url;

//         let channel_title=channel_title
//     })

// }