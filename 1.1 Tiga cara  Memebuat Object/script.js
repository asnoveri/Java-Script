// cara membuat object dalam java script

//1. object literal ->hanya bisa satu instansiasi, jika ingin untuk banyak instansiasi maka harus dibikin objec baru dengan nama object yang berbeda
//problem tidak efektif u object y banyak
let data = {
    nama: 'Laptop',
    batrai: 10,
    main: function (jam) {
        // console.log(this);
        this.batrai = this.batrai - jam;
        console.log(`batrai perangkat anda tinggal, ${this.batrai}%`);
    },
    cas: function (jam) {
        this.batrai = this.batrai + jam;
        console.log(`batrai perangkat anda, ${this.batrai}%`);
    }

}

//2. function decalaration
//problem 
function Warnet(kom, durasi) {

    let komp = {};
    komp.kom = kom;
    komp.durasi = durasi;

    komp.main = function (lama_main) {
        // console.log(this);
        this.durasi = this.durasi - lama_main;

    }
    return komp;
}

let PC1 = Warnet('PC1', 30);


//3.cosntructor function
function Mahasiswa(nama, umur) {

    this.nama = nama;
    this.umur = umur;
    this.kelas_awal = 5;
    this.kelasAkhir = '';
    this.kelas = function (status) {
        this.kelasAkhir = this.kelas_awal + status;
        if (this.kelasAkhir >= this.kelas_awal) {
            console.log(`halo, ${this.nama}, anda naik kekelas ${this.kelasAkhir}`);
        }
    }
}

let asno = new Mahasiswa("asno", 25);