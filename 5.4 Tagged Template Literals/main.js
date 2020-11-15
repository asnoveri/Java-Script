// Tagged Template -> merupakan bentuk paling komplek dari template literals, dan memungkinakan kita membacanya dengan sebuah function


// tagged template

const nama='asno';
const umur= 90;
const pekerjaan="Programer";

function show(stng, ...values){
    return values;
}

const str= show`halo nama saya ${nama}, umur saya ${umur} tahun. pekerjaan ${pekerjaan}`;

console.log(str);

