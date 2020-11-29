// konsep this pada arrow function
// pada constructor function
function Mhs() {
    this.nama = "asno";
    this.umur = 18;
    this.tampil = function () {
        console.log(`halo nama ${this.nama}, umur saya  ${this.umur} tahun`)
    }
}
const asno = new Mhs();
asno.tampil();

//ubah constructor function menjadi arrow function, seperti di bawah
function Mhs1() {
    this.nama = "veri";
    this.umur = 24;
    this.tampil = () => {
        console.log(`halo nama ${this.nama}, umur saya  ${this.umur} tahun`)
        // console.log(this);
    }
}
const asno1 = new Mhs1();
asno1.tampil();



//pada objec liter
let data = {
    nama: 'ruli',
    umur: 10,
    sayUmur: function () {
        console.log(`halo nama ${this.nama}, umur saya  ${this.umur} tahun`)
        // console.log(this);
    }
}
data.sayUmur();
//methode object literal di ubah mejadi arrow function
let data1 = {
    nama: 'Nazif',
    umur: 10,
    sayUmur: () => {
        console.log(`halo nama ${this.nama}, umur saya  ${this.umur} tahun`)
        // console.log(this);
    }
}
data1.sayUmur();
//pada contoh script methode object literal y di ubah menjadi arrow funtion diatas, di temukan masalah keyword this tidak bisa di gunakan pada arrow function yang terdapat di dalam object literal


// contoh lain
function Mahasiswa(nama, umur) {

    this.nama = nama;
    this.umur = umur;
    this.kelas_awal = 5;
    this.kelasAkhir = '';
    // console.log(this);
    this.kelas = function (status) {
        this.kelasAkhir = this.kelas_awal + status;
        if (this.kelasAkhir >= this.kelas_awal) {
            console.log(`halo, ${this.nama}, anda naik kekelas ${this.kelasAkhir}`);
            // console.log(this);
        }
    }

    setInterval(function () {
        // console.log(this);
        console.log(this.kelas_awal++);
    }, 1000);

}

const datacoba = new Mahasiswa("asno", 25);
// datacoba.kelas(10);


//pada contoh di atas di temukan masalah pada function declaration set interval, keyword this adalah object global, karena tersebut kita tidak bisa mengunkan properti kelas awal, namu terdapat cara agar kita bisa mengunkannya yaitu mengubah function deklaration pada setInterval menjadi arrow funtion, sperti contoh di bawah 
function Mahasiswa1(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    this.kelas_awal = 5;
    this.kelasAkhir = '';
    // console.log(this);
    this.kelas = function (status) {
        this.kelasAkhir = this.kelas_awal + status;
        if (this.kelasAkhir >= this.kelas_awal) {
            console.log(`halo, ${this.nama}, anda naik kekelas ${this.kelasAkhir}`);
            // console.log(this);
        }
    }

    setInterval(() => {
        // console.log(this);
        console.log(this.kelas_awal++);
    }, 1000);

}

const datacoba1 = new Mahasiswa1("raunawati", 25);
// datacoba1.kelas(10);