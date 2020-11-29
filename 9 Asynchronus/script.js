/*   
    threaded -> urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain.
    
    single threaded -> (java script hanya bisa melakukan satu hal dalam satu waktu terntentu).
    berarti jika java script punya satu threaded dan juga memiliki  task, maka jika task yang pertama selesai baru bisa menyelesaikan task2 dan begitu seterusnya, secara sederhan java script membaca task baris perbaris dan harus menungu baris yang dibaca selesai di proses untuk membaca task berikutnya


    multi threade-> threadnya nya banyak cuman tasknya bisa dikerjakan oleh threaded  yang berbeda

    Blocking -> harus menunggu task1 selesai di exsekusi baru bisa mengexsekusi task2 

    non-blocking -> walupun task1 belum selesai di exsekusi kita bisa mengkesekusi tesk berikutnya


    synchronus-> pengeksekusian tasknya haru satu persatu tidak bisa sekaligus

    asynchronous-> bisa mengerjakan emua task secara bersamman


    asynchronous + single-threaded= concurency

    asynchronous + multi-threaded= parallelism (bisa mengerjakan secara bersamaan   tasknya)


    kesimpulan
    - single vs multi thread
        berhubungan dengan lingkungan eksekusi task, mengerjakan dengan satu thread atau banyak thread

    - blocking dan non-blocking
        tekning ngoding yang berhubungan dengan input dan output

    - synchronous vs asynchronous
        tekning ngoding yang berhubungan dengan http request  (contoh pengunaan ajax)  

    - concurent vs parallel
         berhubungan dengan lingkungan eksekusi task    



    v8 engine->mesin yang menjlankan java script di web browser 
*/


console.log('start');
setTimeout(()=>{
    console.log('proses');
},50000);
console.log('finish');