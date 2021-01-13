//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

function capitalizeTheFirstLetter(words){
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++){
        //Mengubah huruf besar pada awal kata
        separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1); 
    }
    return separateWord.join(' ');
}
console.log(kataPertama+" "+capitalizeTheFirstLetter(kataKedua)+" "+kataKetiga+" "+kataKeempat.toUpperCase())


//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var a = parseInt(kataPertama)
var b = parseInt(kataKedua)
var c = parseInt(kataKetiga)
var d = parseInt(kataKeempat)
console.log(a+b+c+d)

//Soal 3
var kalimat = 'wah javascript itu keren sekali';
var kataPertama = kalimat.substring(0,3);
var kataKedua = kalimat.substring(4,14);
var kataKetiga = kalimat.substring(15,18);
var kataKeempat = kalimat.substring(19,24);
var kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: '+kataPertama);
console.log('Kata Kedua: '+kataKedua);
console.log('Kata Ketiga: '+kataKetiga);
console.log('Kata Keempat: '+kataKeempat);
console.log('Kata Kelima: '+kataKelima);

//Soal 4
var nilai = 65;

if (nilai >= 80){
    console.log('Indeksnya A');
}
else if (nilai >= 70 && nilai < 80){
    console.log('Indeksnya B');
}
else if (nilai >= 60 && nilai < 70){
    console.log('Indeksnya C');
}
else if (nilai >= 50 && nilai < 60){
    console.log('Indeksnya D');
}
else{
    console.log('Indeksnya E');
}

//Soal 5
var tanggal = 16;
var bulan = 12;
var tahun = 1999;

switch(bulan) {
  case 1:   { console.log(tanggal + ' Januari ' + tahun); break; }
  case 2:   { console.log(tanggal + ' Februari ' + tahun); break; }
  case 3:   { console.log(tanggal + ' Maret ' + tahun); break; }
  case 4:   { console.log(tanggal + ' April ' + tahun); break; }
  case 5:   { console.log(tanggal + ' Mei ' + tahun); break; }
  case 6:   { console.log(tanggal + ' Juni ' + tahun); break; }
  case 7:   { console.log(tanggal + ' Juli ' + tahun); break; }
  case 8:   { console.log(tanggal + ' Agustus ' + tahun); break; }
  case 9:   { console.log(tanggal + ' September ' + tahun); break; }
  case 10:   { console.log(tanggal + ' Oktober ' + tahun); break; }
  case 11:   { console.log(tanggal + ' November ' + tahun); break; }
  case 12:   { console.log(tanggal + ' Desember ' + tahun); break; }
  default:  { console.log('Masukan angka yang benar'); }}
