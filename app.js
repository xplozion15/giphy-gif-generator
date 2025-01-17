const img = document.querySelector("img");
//

fetch(
  "https://api.giphy.com/v1/gifs/random?api_key=QYDcK66FzounkHbq2pLGzUetmZ9Gyhz&s&tag=cats",
  { mode: "cors" }).then((response)=>{
    return response.json();}
).then((response) => {
  img.src = response.data.images.original.url;
}).catch((err)=>{
    img.src = "https://i.ebayimg.com/images/g/laYAAOxy0NtTB9Yi/s-l400.jpg"
});
