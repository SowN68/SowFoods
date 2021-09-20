//const images = ["koithe.jpg", "mcdonalds.jpg", "startbucks.jpg"];

//const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `/img/${chosenImage}`;

//document.body.appendChild(bgImage);
var images = document.querySelector("#greeting-page--bgImg"),
bgImage = ["/img/koithe.jpg", "/img/mcdonalds.jpg", "/img/starbucks.jpg"];

function bgChange(images,bgImage){
            'use-trickt';
            setInterval(function(){
                        var randomImg = Math.floor(Math.random() * bgImage.length);
                        images.src = bgImage[randomImg];    
            },3000);

}

bgChange(images,bgImage);