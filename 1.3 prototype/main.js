// 1. versi prototype inheritence/pewarisan
function Pemain(nama, stamina) {
    this.nama = nama;
    this.stamina = stamina;
}

Pemain.prototype.main = function (durasi) {
    this.stamina -= durasi;
    return `sisa stamina ${this.nama}, sebanayak ${this.stamina} %`;
}

Pemain.prototype.istirahat = function (durasi) {
    this.stamina += durasi;
    return `sisa stamina ${this.nama}, sebanyak ${this.stamina} %`;
}

let asno = new Pemain('asnoveri', 100);

// 2.prototype versi class  sama dengan php

class Player {
    constructor(nama, stamina) {
        this.nama = nama;
        this.stamina = stamina;
    }

    main(durasi) {
        this.stamina -= durasi;
        return `sisa stamina ${this.nama}, sebanayak ${this.stamina} %`;
    }

    istirahat(durasi) {
        this.stamina += durasi;
        return `stamina  ${this.nama} bertambah, sebanyak ${this.stamina} %`;
    }
}

let veri = new Player("adit", 80);


function Mahasiswa(nama, umur) {
    this.nama = nama;
    this.umur = umur;
}

Mahasiswa.prototype.tambah = function (lama) {
    this.umur += lama;
    return this.umur;
}

Mahasiswa.prototype.kurang = function (lama) {
    this.umur -= lama;
    return this.umur;
}

let adit = new Mahasiswa("adit", 100);

class murid {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    plus(angka) {
        return this.umur += angka;
    }
}

let dayat = new murid("dayat", 90);