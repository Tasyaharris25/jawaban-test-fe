function randomNumber(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomInt = randomNumber(1, 100);

let counter = 0;
let text;
while (counter < 5){
    if(randomInt <= 60){
        text = "Kurang";
    }else if(randomInt > 60 && randomInt <= 70){
        text = "Cukup";
    }else if(randomInt >70 && randomInt <= 80){
        text = "Baik";
    }else(randomInt > 80){
        text = "Luar Biasa"; 
    }

    console.log(randomInt)
    console.log(text)
    counter ++
}