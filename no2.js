function katakLoncat(){
    return Math.floor(Math.random()* 100); 
}

let tinggiUnit = katakLoncat();
let loncatanBesar = 0;
let loncatanKecil = 0; 

function jumlahLompatan(tinggiUnit){

    loncatanBesar = tinggiUnit / 3
    loncatanKecil = tinggiUnit % 3

    return loncatanBesar, loncatanKecil;
    
}

console.log(tinggiUnit)
console.log(loncatanBesar)
console.log(loncatanKecil)

