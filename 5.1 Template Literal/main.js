//Template Literal / Tempalte String
//devenisi-> sring literal yang memungkinkan sebuah exspresion didalamnya.


//1.Template literal sederhana
// const nama = "asno";
// const umur = 25;
// console.log(`nama saya: ${nama}, 
// umur saya: ${umur}`); //contoh dengan mengunakan bakc tick (`)
// console.log('nama saya' + nama + ', umu saya' + umur + 'tahun'); //contoh dengan mengunkan concade

//2.Embede exspresion
// console.log(`${1+1}`);
// contoh dengan ternary exspresion
// const a = 90;
// console.log(`${(a > 10)?'True':'False'}`);

//3.Html Fragments

const data = {
    nama: 'asno',
    umur: 34,
    pkerjaan: "it"
};
const de = `<div class="mhs">
    <h2>${data.nama}</h2>
    <p>${data.umur}</p>
    <span>${data.pkerjaan}</span>
</div>`;
console.log(de);