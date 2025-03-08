//let API_KEY = "AIzaSyCy72l1pxo6bczRGc439YBWxCG6zrGOHHQ";//chayan
let Apikey="AIzaSyAzumxhW6tkkJGoi8oitqhpA0-iToQ3ZI0";

let lower_body = document.getElementById("body2nd");

let search_term = document.getElementById("searchinput").value || "India Gate";

async function getData() {
    try {
        let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${Apikey}`)

        let res = await data.json()
        console.log(res.items);
        showData(res.items)
    } catch (error) {
        console.log(error)
    }
}

getData();


async function showData(arr){
    document.getElementById("loading").style.display="none"
    arr.forEach(({snippet, id}) => {
        let box = document.createElement("div");
        box.className="video";

        let img = document.createElement("img");
        img.src = snippet.thumbnails.medium.url;

        let title = document.createElement("p");
        title.innerText = snippet.title;

        let channel_title = document.createElement("p");
        channel_title.innerText = snippet.channelTitle;

        box.append(img, title, channel_title);

        lower_body.append(box)

        box.onclick=()=>{
            let obj ={
                snippet, id
            }

            localStorage.setItem("videoData", JSON.stringify(obj));

            window.location.href = "video.htm"
        }
    });
}


// <iframe width="560" height="315" src="https://www.youtube.com/embed/2t1jSBg086o?si=lp8ECI1g9c_rQ7Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>