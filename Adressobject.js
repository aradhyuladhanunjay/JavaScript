const Adress={
    street:"a",
    city:"b",
    zipcode:"c"
};
function showAdress(Adress){
    for(let i in Adress){
        console.log(i,Adress[i])
    }

}
showAdress(Adress);