//Soal 1
console.log('LOOPING PERTAMA')
for (var angka = 1; angka<=10 ; angka++){
    console.log(2*angka + ' - I love coding')
}
console.log('LOOPING KEDUA')
for (var angka = 10; angka>=1 ; angka--){
    console.log(angka*2 + ' - I will become a frontend developer')
}

//Soal 2
console.log(' ')
for (var angka = 1; angka<= 20 ; angka ++){
    if (angka%2 == 0){
        console.log(angka + ' - Berkualitas')
    }
    else if (angka%3 !=0 && angka%2 !=0 ){
        console.log(angka + ' - Santai')
    }
    else if (angka%3 == 0 && angka%2 != 0){
        console.log(angka + ' - I Love Coding')
    }
}

//Soal 3
console.log(' ')
for (var a=1 ; a<=7 ; a++){
    for (var b=1 ; b<=a ; b++){
        process.stdout.write('#');
    }
    console.log();
}

//Soal 4
console.log(' ');
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

//Soal 5
console.log(' ')
var daftarBuah = ['2. Apel','5. Jeruk','3. Anggur','4. Semangka','1. Mangga'];
var sort = daftarBuah.sort();
var length = daftarBuah.length;
for (var i=0 ; i<= length ; i++){
    console.log(sort[i]);
}
