const angka = [1, 1, 4, 5, 6, 11, 8, 10];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] > 4) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// 1. filter
// filter angka besar sama dari 3
// const newAngka = angka.filter(x => x => 3);
// console.log(newAngka);

// 2. map
// buat array baru dengan map, yang mana array angka di kali 2
// const newAngka = angka.map((x) => x *= 2);
// console.log(newAngka);

// 3. reduce
// jumlah selurh emlemen pada array
// acumulator -> hasil dari proses(+,-,*,/) dari elemen array tertentu
// curentval  -> eleme array yang sedang di looping,
// 1 + 1 + 4 + 5 + 6 + 11 + 8+ 10
// const newAngka = angka.reduce((acumulator, curentnval) =>
//     acumulator + curentnval,0)
// ket 0 diatas dibbelakan koma curentval-> meruapakan nilai awal kalaw tidak ditulis nilai awalnya defaultnya nol
// console.log(newAngka);

// 4. methode chaining (berantai)
// cari angka >6
// dikalikan 2
// jumlahkan
// 11,8,10
//22,16,20
//hasilnya 58
// const NewAngka = angka.filter(function (x) {
//     return x > 6;
// }).map(function (x) {
//     return x *= 2;
// }).reduce(function (acc, crr) {
//     return acc + crr;
// });

// const NewAngka = angka.filter((x) => x > 6)
//     .map(x => x *= 2)
//     .reduce((acc, crr) => acc + crr,2);
// console.log(NewAngka);
