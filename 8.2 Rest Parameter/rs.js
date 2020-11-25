/* Rest Parameter
    -> devenisinya adalah memepesentasikan argument pada function dengan jumalh yang tidak terbatas menjadi sebuah array
    -> hanya bisa di gunakan pada akhir argument function, karena digunakan untuk menampung seluruh parameter sisa 
*/

// Contoh

// function myFuntion(a,b,...sisa){
//     return `ini a:${a},  ini b:${b}, ini sisa:${sisa}`;
// }

// console.log(myFuntion(1,2,3,4,5,6,7));


// function myFuntion1(){
//     return Array.from(arguments);
// }

// console.log(myFuntion1(1,2,3,4,5,6,7));

// function jumlah(){
//     const dt= Array.from(arguments);

//    const baru= dt.reduce((a,b)=> a+b);
//    return baru;
// }
// console.log(jumlah(1,2,3,4,5,6,7,8,9));


// function jumlah1(...angka){
//     let tot=0;
//     for(const a of angka ){
//         tot +=a;
//     }
//     return tot;
// }

// console.log(jumlah1(1,2,3,4,5,6,7,8,9));

// array distructuring

    // const Projek= ['asno','veri','adit','dayat','kuntet'];
    // const [ketua,wakil,...anggota]= Projek;
    // console.log(anggota);

    // const data={
    //     ketua:"asno",
    //     wakil:"veri",
    //     anggota:"adit",
    //     anggota1:"tiara",
    //     anggota2:"Ayb",
    //     anggota3:"Nikma Ayuni"

    // }

    //     const {ketua,wakil, ...anggota}= data;

    //     console.log(anggota);


    function cekfilter(type, ...values){
        return values.filter(v => typeof v === type);
    }

    console.log(cekfilter('string',1,2, 'asno',false,10,true,'veri'));