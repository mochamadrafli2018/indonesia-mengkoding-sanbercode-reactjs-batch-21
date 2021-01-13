"use strict";

//Soal 4
var nilai = 75;

if (nilai >= 80) {
  console.log('A');
} //Tidak bisa 70 <= nilai < 80
//nilai >= 70 && nilai < 80
else if (70 <= nilai < 80) {
    console.log('B');
  } else if (nilai >= 60 && nilai < 70) {
    console.log('C');
  } else if (nilai >= 50 && nilai < 60) {
    console.log('D');
  } else {
    console.log('E');
  }