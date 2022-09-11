let img = document.getElementsByClassName("img")[0]
let icons = document.getElementsByClassName("icon")
for(let i = 0;i<5;i=i+1){
    console.log("Силя");
    icons[i].onclick= function (event) {
        img.src=event.target.src
    }
}