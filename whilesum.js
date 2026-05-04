let a=45;
let sum=0;
while(a>0){
    d=a%10;
    sum+=d; 
    a=Math.floor(a/10);
}
console.log(sum);