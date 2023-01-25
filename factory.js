const Adress= new Adres('a','b','c');
function showAdress(street,city,zipcode){
    return {
        street,
        city,
        zipcode
    };

}
console.log(Adress);

function Adres(street,city,zipcode){
    this.street=street;
    this.city=city;
    this.zipcode=zipcode;
}