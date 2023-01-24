const movie={
    title:"a",
    releaseyear:2018,
    rating:4.5,
    director:'b'
}
function showproperties(){
    for(let i in movie){
        if (i=='title'|| i=='director') console.log(i,movie[i]);
    }
}
console.log(showproperties(movie))