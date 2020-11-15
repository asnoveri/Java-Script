// arrow function adalah bentu paling ringkas dari function exspresion

//contoh function exspression
let Ex = function (nama) {
    console.log(nama);
}
Ex('asno');
//di ubah ke arrow function 
let Ex1 = (nama) => {
    console.log(nama);
}
Ex1('veri');

//contoh lainnya:

//cara-cara membuat arrow function
//jika parmeternya hanya 1-> tanda kurung pada penerimaan parameter di function bisa di hapuskan 
const Ex2 = nama => {
    return `halo ${nama}`;
}
console.log(Ex2('adit'));

//dan jika parameternya lebih dari satu tanda kurung buka dan kurung tutup wajib di buat
const Ex3 = (nama, umur) => {
    `halo ${nama}, sekarang umur anda ${umur}`;
}
console.log(Ex3('nazif', 10));

//jika isi functionnya hanya return, bisa di perpendek skriptnya seperti berikut, yang di sebut dengan implisit return (return tidak di tulis)
const data = jam => `selamat ${jam}`;
console.log(data('siang'));

//jika functionnya tampa parameter kita wajib menuliskan kurung buka dan kurung tutup
const tampil = () => `halo`;
console.log(tampil());


// contoh lainnya;
let nama = ['asno', 'veri', 'adit'];
let panjang = nama.map(function (x) {
    return x.length;
});
console.log(panjang);

let ukur = nama.map(x => x.length);
console.log(ukur);

//jika ingin mengebalikan object tambhkan kurang buka dan kurung tutup di luar kurung kurawal isi function
let tes = nama.map(x => ({
    x: x,
    tes: x.length
}));
console.log(tes);
console.table(tes);
//console.table(tes)-> menampilakn data dalam bentu tabel