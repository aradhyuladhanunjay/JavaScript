const marks=[80,80,50];
let sum=0;
function grade(){
    for(let i of marks){
        sum=sum+i
    }
    let average=sum/3;
    console.log(average);
    if (average>=0 && average<=59) 
    return 'F';
    else if (average>=60 && average<=69) 
    return 'D';
    else if (average>=70 && average<=79) 
    return 'C';
    
    else if (average>=80 && average<=89) 
    return 'B';
    
    else if (average>=90 && average<=100) 
    return 'A';
    

}
console.log(grade(marks));