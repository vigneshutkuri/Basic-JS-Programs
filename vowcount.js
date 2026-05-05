let vowels="";
const a=function(str){
    for(let i of str.toLowerCase()){
        if("aeiou".includes(i)){
            
            vowels+=i;
           
        }

    }
    return vowels;
}

console.log(a("vignesh"));