let count=0
function sum(input){
    for(let i=0;i<=input;i++){
        if(i%3===0 || i%5===0){
            count+=i
        }
    }
    return count;

}
console.log(sum(10))