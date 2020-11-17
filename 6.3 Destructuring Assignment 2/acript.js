// Destructuring

// function Aritmatika(a,b){
//     return [a + b, a * b, a - b, a / b];
// }

// const [jumlah,kali,kurang,bagi="Tidak Ada"] = Aritmatika(5,5);

// console.log(jumlah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);





// DEstructuring function 

// function art (a,b){
//     return{
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a /b
//     }
// }

// const {kurang,tambah,bagi,kali}= art(10,6);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);
// console.log(tambah);





// DEstructuring function arguments

// const data={
//     nama:"asnoveri",
//     umur:25,
//     job:"Web Programer",
// }

// cara 1
// function cetakData(nama,umur,job){
//     return `halo nama saya ${nama}, umur saya ${umur}, pekerjaan 
//     ${job}`;
// }
    // console.log(cetakData(data.nama, data.umur, data.job));s


// cara 2
// function ctkData(dta){
//     return ` Halo Nama Saya ${dta.nama}, umur saya ${dta.umur} tahun, pekerjaan saya ${dta.job}`;
// }

// console.log(ctkData(data));
    
// const Karyawan={
//     nama:"asnoveri",
//     umur:25,
//     pekerjaan: "web Programer",
//     skil:{
//         sk1:"Php",
//         sk2:"JS"
//     }

// }
//         function ctkKrywn({nama,umur,pekerjaan,skil}){
//             return `nama saya ${nama}, umur saya ${umur} thn, pekerjaan saya ${pekerjaan}, skil saya ${skil.sk1} dan ${skil.sk2}`
//         }
        
//         console.log(ctkKrywn(Karyawan));
function multiply(a, b){
  return a * b
}
console.log(multiply(1,9));



