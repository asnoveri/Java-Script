//Closure -> sebuah function y memiliki akses ke parent scopenya, walaupun parent scopenya sudah di selesai di eksekusi

// console.dir(); -> digunakan untuk menampilkan object

// contoh 1
function init() {
    let nama = "asno";

    function data() {
        console.log(nama);
    }

    data();
}
init();



//contoh 2
function init1() {
    let nama = "veri";

    function data1() {
        console.log(nama);
    }
    return data1;
}
let tes = init1();
tes();

//contoh3
function init2() {
    function data2(nama) {
        console.log(nama);
    }
    return data2;
}
let tes1 = init2();
tes1('arif');

function init3() {
    return function (nama) {
        console.log(nama);
    }

}
let tes2 = init3();
tes2('kuntet');

//kenapa mengunakan closure :
// 1. u membuat function factory
// 2. u membuat privet methode
//contoh: 

function dataMhs(kelas) {
    return function (nama) {
        return console.log(`halo ${nama}, kamu terdaftar di kelas ${kelas}`);
    }
}

let kelasR = dataMhs(10);
kelasR("asno");
// console.dir(kelasR);


function parent(data){
    let nama="asnoveri";
    return function(ank){
        return console.log(`hai nama Saya ${nama}, ibu dan ayah saya seorang ${data}, dan kakak saya seorang ${ank}`);
    }
}

let dt= parent('guru');
dt('pilot');



// Keadaan Awal script hitung angka
let angka = 0;

function hitung() {
    return angka++;
}
console.log(hitung() + " " + "hitung");
console.log(hitung() + " " + "hitung");

// script diatas sudah baik, tetapi ada sedikit masalah pada variabel angka (let angka),ex: jika di baris bawah dari script di tambhkan angka=100, maka variabel angka (let angka) akan ikut berubah , sperti contoh di bawah
let angka1 = 0;

function hitung2() {
    return angka1++;
}
angka1 = 100;
console.log(hitung2() + " " + "hitung2");
console.log(hitung2() + " " + "hitung2");

//cara mengatasi eror diatas adalah kita bisa memindahkan varibel angka(let angka) kedalam function agar isi varibel angka tida tergangu oleh angka=100, tetapi muncul masalah baru isi dari variable angka tetap 0 meski telah di instansiasi, seperti berikut;
function hitung3() {
    let angka2 = 0;
    return angka2++;
}
angka2 = 100;
console.log(hitung3() + " " + "hitung3");
console.log(hitung3() + " " + "hitung3");

//cara mengatasi masalah di atas adalah kita bisa menambkan function anonymous agar nilai variabel angka bisa bertambh sesuai instansiasi yang di lakukan.
//contoh denga function decleration
function hitung4() {
    let angka3 = 0;
    return function () {
        return angka3++;
    }
}
angka3 = 90;
let a = hitung4();
console.log(a() + " " + "hitung4");
console.log(a() + " " + "hitung4");
console.log(a() + " " + "hitung4");

//atau contoh lainnya denga function exspresion
let hitung5 = (function () {
    let angka4 = 0;
    return function () {
        return angka4++;
    };
})();

angka4 = 90;
console.log(hitung5() + " " + "hitung5");
console.log(hitung5() + " " + "hitung5");
console.log(hitung5() + " " + "hitung5");