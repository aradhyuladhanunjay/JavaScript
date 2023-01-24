function showStars(input){
    for (let i=0;i<=input;i++){
        let pattern='';
        for(let j=0;j<i;j++){
            pattern+='*'
        }
        console.log(pattern);
        
    }
}
console.log(showStars(10));