const MahasiswaMethode = {
    nilaiUts: function (nilaiuts) {
        this.ipk = (this.nilaiTugas + nilaiuts) / 2;
        console.log(`Halos ${this.nama}, nilai uts anda ${this.ipk} `);
    },

    nilaiuas: function (nilaiuas) {
        this.ipk = (this.nilaiTugas + nilaiuas) / 2;
        console.log(`Halos ${this.nama}, nilai uas anda ${this.ipk} `);
    },

}

function Mahasiswa(nama, kelas) {
    let mhs = Object.create(MahasiswaMethode);
    mhs.nama = nama;
    mhs.kelas = kelas;
    mhs.ipk = '';
    mhs.nilaiTugas = 80;
    return mhs;
}

let asno = Mahasiswa('asno', '3A');