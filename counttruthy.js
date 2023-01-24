const array=[0,null,undefined,false,'',2,3];
let count=0
function counttruthy(array){
    for(let i of array){
        if(i) count+=1;
    }
    return count;

}
console.log(counttruthy(array));