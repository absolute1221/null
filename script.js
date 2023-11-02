function array(string){
    if (string == '') {
        console.log("null");
    }
    return string.slice(1, -1)  
}
console.log(array(''));//null
console.log(array('1,2'));//null
console.log(array('1,2,3'));//2
console.log(array('a,b,c,d'));//b,c,d
