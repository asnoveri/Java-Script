// destructing assing array

const arr=['asno','dapit','rohim','robi'];

// 1.
// const [pop1,pop2,pop3,pop4]= arr;

// console.log(`halo nama saya: ${pop1}, saya memiliki beberapa orang teman yaitu: ${pop2}, ${pop3}, ${pop4}`)

// 2 skiping item
// const [pop1,,pop3,pop4]=arr;
// console.log(`${pop1},${pop3},${pop4}`)

// 3. swap item
// let a= "asno";
// let b= "veri";

// [a,b]=[b,a];
// console.log(`${a} ${b}`);


// 4. return value function

// function data(){
//     return ['asno','veri'];
// }

// const [asno,veri]=data();
// console.log(asno,veri);


// 5. rest parameter    
// const res= ['sma salimpaung', 'sma sungaitarab' ,' sma sungatarab 2', 'sma batusangkar'];

// const [schl, ...value]=res;

// console.log(schl, value);


// destructing assing object

    // const obj={
    //     nama:"asno",
    //     umur:25,
    //     kelas:"3A",
    //     pekerjaan:"Staf IT"
    // }
    // assignment tanpa deklarasi object
    // const {nama,umur,kelas,pekerjaan}= obj;
    // console.log(`Perkenalankan Nama Saya: ${nama}, umur saya: {${umur}} tahun, saya kelas: ${kelas}, pekerjaan saya: ${pekerjaan}`);

    // assignment tanpa deklarasi object
    // ({name, umur}={
    //     name:"asno",
    //     umur:90
    // });
    // console.log(name, umur);


    // assign ke variabel baru
    // const data={
    //     nama:"asno veri",
    //     status:"Aktif",
    //     umur:25

    // }

    // const {nama:na, status:stts, umur:um, email:em="default@mail.com"}=data;
    // console.log(na,stts, um, em);


    // rest parameter
    // const mhs={
    //     nama:"Aditya Fernanda",
    //     umur:24,
    //     kelas: "SI-10",
    //     id:148056,
    // };

    // const {nama, ...value}= mhs;

    // console.log(nama);
    // console.log(value);

    // mengambil field pada object, setelah dikirm sebagi parameter untuk function
    // const data={
    //     nama:"asnoveri",
    //     id: "06781",
    //     umur:24,
    //     pekerjaan:"Programer",
    // }

    // function getId({id}){
    //     return id;
    // }

    // console.log(getId(data));

    // function satu(){
    //     function dua(){
    //         console.log("ASNOVERI");
    //     }
    //     dua();
    // }
    // satu();

//     function data(){
//         return function (nama){
//             console.log(nama);
//         }
//     }
//    let tes= data();
//    tes("asno");

