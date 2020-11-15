//  devenisi destructuring assignment -> exspresion atau sintak java script yang memungkinkan kita mebongkar nilai array atau property dari object kedalam variable yang terpisah

// example-> :
    // 1. contoh sederhana dengan destructuring array
    // const tes=['asno','rohim','apit'];

    // const [a,b,c]= tes;
    // console.log(`${a}, ${b}, ${c}`);

    // 2. contoh sederhana dengan  destructuring object

    // const mhs={
    //     nama:'Arif',
    //     umur:24,
    // }

    // const {nama,umur}=mhs;

    // console.log(nama);
    // console.log(umur);




// contoh lain

    //1. destructuring array
    // const sayhallo = ['hallo','nama', 'saya', 'asno', 'veri'];
        
    // const [salam,name,saya,satu,dua]= sayhallo;

    // console.log(salam);
    // console.log(name);
    // console.log(saya);
    // console.log(satu);
    // console.log(dua);

        // skiping item -> melawatkan item2 array tertentu
            // const [salam1,,,satu1,dua1]=sayhallo;
            // console.log(salam1);
            // console.log(name1);
            // console.log(saya1);
            // console.log(satu1);
            
        // swap ite, -> menukar isi dari array
            // let angk1= "saya satu";
            // let angk2= "saya dua";
            // console.log(angk1);
            // console.log(angk2);
            
            // console.log("");

            // [angk1,angk2]=[angk2,angk1];
            // console.log(angk1);
            // console.log(angk2);

        // return value pada function -> bisa mengembalikan array, dan array lansung di tangkat oleh distructuring
        // ex:
            // function cobalagi(){
            //     return ['ade','ade2'];
            // }
            // const [ade,ade2]=cobalagi();
            // console.log(ade);
            // console.log(ade2);

        // rest parameter  
      /*   const [num1,...num2]=[1,2,3,4,5,6];
        console.log(num1);
        console.log(num2); */

    //2. destructuring object
        // assignment tanpa deklarasi object
            //  ({na,umu}={
            //      na:"asno",
            //      umu:10
            //  });
            //  console.log(na);
            //  console.log(umu);

        // assignment ke variable baru
        // const old={
        //     ayah:'Salmi',
        //     umur:65,
        // }

            // dibawah cara untuk assignment variable baru
            // const {ayah:ayh, umur:umr }=old;
            // console.log(ayh);
            // console.log(umr);

        // memberikan nilai default value
            // const old={
            //     ayah:'Salmi',
            //     umur:65,
                
            // }
            //   const {ayah, umur, pekrjaan="asnoveri@pkr.ac.id" }=old;
            //     console.log(pekrjaan);

         // memberikan nilai default + assign ke varibale baru
            // const old={
            //     ayah:'Salmi',
            //     umur:65,    
            // }

            // const {ayah:ayh, umur:umr, pekrjaan:p="asnoveri@pkr.ac.id" }=old;
            // console.log(p);
        
        // rest parameter
            // const old={
            //     ayah:'Salmi',
            //     umur:65,    
            //     pekrjaan:"PNS",
            // }

            // const{ayah,...value}=old;
            // console.log(ayah);
            // console.log(value);

        // mengambil field pada object, setelah dikirm sebagi parameter untuk function
            // const old={
            //     id:123,
            //     ayah:'Salmi',
            //     umur:65,    
            //     pekrjaan:"PNS",
            // }

            // function getId({id}){
            //     return id;
            // }

            // console.log(getId(old));



