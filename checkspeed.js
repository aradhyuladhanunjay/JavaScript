function checkspeed(input){
    if (input<=70) return 'ok';
    else{
        points=Math.floor((input-70)/5);
        if (points>=12)
        return "license suspended";
        else
        return ('points',points);
    }
}
console.log(checkspeed(130));