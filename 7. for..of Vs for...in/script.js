// Loping baru pada modern java script:
//     1. for..of -> di gunakan untuk mengulang isi array atau iterabel yang lain
//          -> sebuah loping yang bisa mengunlang atau menelusuri object yang iterable:
//          - string
//          - array
//          - arguments / node list
//          - typedArray
//          - map
//          - set
//          - user-defined iterabels

        // contoh:

        // tiga cara menloping array
        // const data=['asno', 'veri', 'taira'];

        // dengan for biasa
        // for (let index = 0; index < data.length; index++) {
        //     console.log(data[index]);   
        // }

        // dengan foreach
        // data.forEach(mhs => console.log(mhs));

        // denga foreach + parameter index array
        //  data.forEach((d,i)=> {
        //      console.log(`${i} , ${d}`)
        //     });


        // dengan for of
        // for(const d of data){
        //     console.log(d);
        // }

        // dengan for + index array

        // for(const [i,a] of data.entries()){
        //     console.log(`${i}  ${a}`)
        // //         
        // }




        // string
        // const nama="ASNO VERI";
        // for(n of nama){
        //     console.log(n);
        // }



        // node list
        // const nm =document.querySelectorAll(".nm");

        // // nm.forEach(n=> console.log(n.innerHTML));
        // for(const a of nm){
        //     console.log(a.innerHTML);
        // }


        // arguments -> digunakan untuk menampung semua hal yang di keirmkan kedalam function ketika nama parameter function kosoong

        // function cak(){
        //     console.log(arguments);
        // }
        //     cak(1,2,3,4,5,6,7);

        // unutuk loping argument kita tidak dapat mengunkan foreach, for reduce atau function yang bisa kita gunakan untuk menghedale array

        // function arr(){
        //     let jumlah=0;
        //     for(a of arguments){
        //         jumlah += a;
        //     }
        //     return jumlah
        // }

        //   console.log(arr(1,2,3,4,5));



//     2. for..ins -> digunakan unutk melooping property dari object
//          -> melakukan pengulangan pada property pada object (enumarabel) 

    // contoh:

        // const obj ={
        //     nama:"asno",
        //     umur:25,
        //     status: "joms"
        // }

        // for( m in obj ){
        //     console.log(m)
        // }

        // contoh mengabil value object
         
        // for(m in obj){
        //     console.log(obj[m]);
        // }

            
