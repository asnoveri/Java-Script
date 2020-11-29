/* CallBack ->
        - function yang dikirimkan sebagai parameter pada function yang lain
        - function yang dieksekusi setelah fungsi lain di jalankan


        contoh:
*/
        // Synchronous callback
                // function halo(nama){
                //         alert(nama);
                // }

                // function tampilkanpesan(cbk){
                //         const nama= prompt('masukan nama: ');
                //         cbk(nama);
                // }

                // tampilkanpesan(halo);


                //  function tampilkanpesan(cbk){
                //         const nama= prompt('masukan nama: ');
                //         cbk(nama);
                //  }

                // tampilkanpesan(nama => {
                //         alert(nama);
                // })

                // tampilkanpesan(function (nama){
                //         alert(nama);
                // });




        // Asynchronous  callback
function getDataMhs(url, success, error){
        let xhr= new XMLHttpRequest();
        xhr.onreadystatechange= function(){
                if(xhr.readyState === 4){
                        if(xhr.status === 200){
                                success(xhr.response);
                        }else{
                                error();
                        }
                }
        }

        xhr.open('get', url,true);
        xhr.send();
}

console.log("mulai");
getDataMhs('mhs.json',result =>{
        const ms= JSON.parse(result);
        ms.forEach(m => console.log(m.nama))
        // console.log(JSON.parse(result));
        // JSON.parse(result)-> digunkan untuk mengubah data json dalam bentuk text ke object
}, er=>{
        console.log(er.responseText);
});
console.log("selesai");
