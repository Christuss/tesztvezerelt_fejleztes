$(function(){
})

function fizzbuzz(n){
    
    if (n === 0) {
        return "";
    } else {
        let txt = "";
        for (let index = 1; index < n; index++) {
            txt += fizzbuzzErtek(index) + ", ";
        }
        txt += fizzbuzzErtek(n);
        
        return txt;
    }
}

function fizzbuzzErtek(x){
    let ertek = "";
    if (x % 5 === 0 && x % 3 === 0) {
        ertek = 'fizzbuzz';
    } else if (x % 3 === 0) {
        ertek = 'fizz';
    } else if (x % 5 === 0) {
        ertek = 'buzz';
    } else {
        ertek = x;
    }
    return ertek;
}