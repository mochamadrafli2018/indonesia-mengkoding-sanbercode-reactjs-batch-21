//Object
var personArr = ["John", "Doe", "male", 27]
var personObj = {
    firstName : "John",
    lastName: "Doe",
    gender: "male",
    age: 27
}
 
console.log(personArr[0]) // John
console.log(personObj.firstName) // John 

//Mengakses nilai pada object
var motorcycle1 = {    
    brand: "Handa",
    type: "CUB",
    price: 1000
}
console.log(motorcycle1.brand) // "Handa"
console.log(motorcycle1.type) // "CUB"
console.log(motorcycle1["price"]) //1000

//Foreach
console.log()
var mobil = [
    {
        merk: "BMW",
        warna: "merah",
        tipe: "sedan"},
    {
        merk: "toyota",
        warna: "hitam",
        tipe: "box"},
    {
        merk: "audi",
        warna: "biru",
        tipe: "sedan"}
]
//forEach
mobil.forEach(function(item){
    console.log("warna : " + item.warna)
 })
//map
 var arrayWarna = mobil.map(function(item){
     return item.warna
 })
 console.log(arrayWarna)
 //filter
 var arrayMobilFilter = mobil.filter(function(item){
    return item.tipe != "sedan";
 })
 console.log(arrayMobilFilter)