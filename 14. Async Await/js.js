/* 
konsep asyncronus dan await

    asyncronus => 
        sebuah function bekerja secara asyncronus (melalui event loop), yang menghasilkan (implisit) promise sebagai return value-nya, tapi cara penulisan codenya mengunakan penulisan yang syncronus (standar)

        sebuah async function dapat memiliki keyword await (keywor await hanya dapat berjalan ketika functio async ada), keyword await gunanya untuk memberhentikan sementara eksekusi fungsinya sampai menuggu promisenya selesai
*/

// contoh pengunaannya:


function coba(){
    return new Promise((resolve, reject)=>{
        const wktungu= 5000;
            if(wktungu < 5000){
                setTimeout(()=>{
                    resolve("Selesai");
                },2000);
            }else{
                reject('Kelamaan');
            }
    })
}

// const cobaPr= coba();
// cobaPr
// .then(() => console.log(cobaPr))
// .catch(() => console.log(cobaPr));


async function cobaAsync(){
    try{
       const res=await coba();
       console.log(res);
   }catch(err){
       console.error(err);
   }
}
cobaAsync();

/* 
    try dan catch digunakan untuk menampung resolve dan reject promise didalam sebuah function yanmg mengunakan asyn dan await
    try => untuk menangkap resolve dari promise sama dengan then
    catch=> untuk menangkap reject dari sebuah promise sama dengan catch
*/
