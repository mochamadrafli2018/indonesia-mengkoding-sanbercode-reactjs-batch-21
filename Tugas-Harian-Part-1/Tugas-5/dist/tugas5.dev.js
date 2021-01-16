"use strict";

//Soal 1
console.log();
console.log('-----soal 1-----');

function halo() {
  return "Halo Sanbers!";
}

console.log(halo()); //Soal 2

console.log();
console.log('-----soal 2-----');

function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali); //Soal 3

console.log();
console.log('-----soal 3-----');

function introduce() {
  return "Nama saya " + nama + ' ,umur saya ' + age + ' tahun' + ' ,alamat saya di ' + address + ' ,dan saya punya hobby yaitu ' + hobby;
}

var nama = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(nama, age, address, hobby);
console.log(perkenalan); //Soal 4

console.log();
console.log('-----soal 4-----');
var arrayDaftarPeserta = ["Asep", "laki-laki", 'baca buku', 1992];
var DaftarPeserta = {
  'nama': arrayDaftarPeserta[0],
  'jenisKelamin': arrayDaftarPeserta[1],
  'hobi': arrayDaftarPeserta[2],
  'tahunLahir': arrayDaftarPeserta[3]
};
console.log(DaftarPeserta); //Soal 5

console.log();
console.log('-----soal 5-----');
var buah = [{
  'nama': 'strawberry',
  'warna': 'merah',
  'adaBijinya': false,
  'harga': 9000
}, {
  'nama': 'jeruk',
  'warna': 'oranye',
  'adaBijinya': true,
  'harga': 8000
}, {
  'nama': 'Semangka',
  'warna': 'hijau & merah',
  'adaBijinya': true,
  'harga': 10000
}, {
  'nama': 'Pisang',
  'warna': 'merah',
  'adaBuning': false,
  'harga': 5000
}]; //Mengakses object pertama pada array

console.log(buah[0]); //Soal 6

console.log();
console.log('-----soal 6-----');
var dataFilm = [];
var film1 = {
  "nama": "LOTR",
  "durasi": "2 jam",
  "genre": 'action',
  "tahun": '1999'
};
var film2 = {
  "nama": "avenger",
  "durasi": "2 jam",
  "genre": 'action',
  "tahun": '2019'
};
var film3 = {
  "nama": "spiderman",
  "durasi": "2 jam",
  "genre": 'action',
  "tahun": '2004'
};
var film4 = {
  "nama": "juon",
  "durasi": "2 jam",
  "genre": 'horror',
  "tahun": '2004'
}; //Fungsi

function pushFilm(film) {
  dataFilm.push(film);
} //panggil fungsi


pushFilm(film1);
pushFilm(film2);
pushFilm(film3);
pushFilm(film4);
console.log(dataFilm);