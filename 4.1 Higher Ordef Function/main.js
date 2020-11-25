// Higher order function adalah function yang beroperasi pada function lain, baik digunkan dalam argument atau return value.

//inti dari java script adalah function

//java script memperlakukan function sebagai object

//ex:
function kelas() {
    console.log("satu");
}

function data(mhs, kelas) {
    console.log(mhs);
    kelas();
}
let ade = data('mhs', kelas);
//function data bisa dsebut sebagai higher order function(karena menyimpan callback sebagai argument), kelas ada function yang di simpan sebagi argument yang di sebut call back 

// alasan mengunakan higher order function
// 1. abstraksi -> mensederhanakan kode program, dengan mengunakan function meperkecil kerumitan 
// 2. functional programing



function ulang(u, aksi) {
    for (let i = 0; i < u; i++) {
        aksi(i);
    }
}
// ulang(11, console.log);
ulang(2, console.log);
// ulang(2,alert);