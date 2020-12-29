/* 
    FETCH
        -> adalah sebuah  API Pada Java Script Modern, yang tugasnya mengambil data secara synchronous 

*/


const search = document.querySelector('.search');

search.addEventListener('click',function(){
    const valu= document.querySelector(".inpt-src").value;

    
     fetch(`http://www.omdbapi.com/?apikey=a753a3ce&s=${valu}`)
        .then(resp => resp.json())
        .then(resp => {
            const mopie= resp.Search;
            let konten ="";

            mopie.forEach(m => {
                konten += showCard(m);             
            });

            const kon= document.querySelector("#konten");
            kon.innerHTML=konten;
            
            
            const tmbl=document.querySelectorAll(".tmbl");
        
            tmbl.forEach(btn =>{
               btn.addEventListener('click',function(){
                const imdbID=this.dataset.imdbid;
                fetch(`http://www.omdbapi.com/?apikey=a753a3ce&i=${imdbID}`)
                    .then(resp=> resp.json())
                    .then(hasil => {
                        const moviedetail= showMoviedetail(hasil);
                        const modal=document.querySelector(".modal-body");
                        modal.innerHTML=moviedetail
                        
                    });
               });
            });
        });
})


function showCard(m){
    return `<div class="col mb-4">
                <div class="card h-100">
                    <img src="${m.Poster}" class="card-img-top" alt="poster">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <button type="button" class="btn btn-primary tmbl" data-toggle="modal" data-target="#exampleModal" data-imdbID="${m.imdbID}">
                        Show Detail
                        </button>
                    </div>
                </div>
            </div>`;
};

function showMoviedetail(hasil){
    return `<div class="fluid-container">
                <div class="row">
                    <div class="col-md-5">
                        <img src="${hasil.Poster}" alt="poster" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group ">
                            <li class="list-group-item"><h5>${hasil.Title} (${hasil.Year})</h5></li>
                            <li class="list-group-item"><Strong>${hasil.Director}</Strong></li>
                            <li class="list-group-item"><span class="badge badge-dark">${hasil.Genre}</span></li>
                            <li class="list-group-item"><p>${hasil.Plot}</p></li>
                        </ul>
                    </div>
                </div>
            </div>`;
};

/* 
    Konsep dan Teori fetch

    fetch()
        => sebuah method pada api javascript untuk mengambil "resource" dari jaringan, dan mengembalikan "promise" yang selesai ("fullfiled") ketika ada "response" yang tersdia

        ex:
        fetch(resources, init);
        resources   =>  url sumber
                        request object
        init        => configurasi tambahan pada sebuah request berbentuk object yang sifatnya (Optional):
            - methode (post, get), get adalah defaultnya kalaw tidak di set
            - headers => antar muka fetch api memungkinkan anda untuk melakukan berbagai tindakan pada permintaan HTTP dan header respon, seperti menambah, menghapus, menyetel dan mengambil header dari daftar header permintaan
            - body  => 
            - mody
            - cache
            - referrer
            - referrePolicy
            - integrity
            - keepalive
            - signal

            response    => hasil dari fetch, berupa promise
                - response (property)
                    1. headers      => object header yang berkaitan dengan response, yang bersifat read-only
                        a. headers.append   => unutk menmbhakan nilai baru kedalam header objec
                            ex: const head= new Headers();
                                head.append('Content-Type','Image/jpg');
                                console.log(head.get('Content-Type'));
                        b. headers.delete    =>Menghapus header tertentu
                            ex: const head= new Headers();
                                head.append('Content-Type','Image/jpg');
                                head.append('Content-Type','Aplication/Json')
                                console.log(head.get('Content-Type'));
                                head.delete('Content-Type');
                                console.log(head.get('Content-Type'));
                        c. Header.entrie    => cara untuk menampilkan keseluruhan data header response
                        ex: 
                            const head= new Headers();
                            head.append('Content-Type','Image/JPG');
                            head.append('Content-Type','Content-Length');

                            for(const a of head.entries()){
                                    console.log(a);
                                }
                        d. headers.get -> mengambil isi headers header
                        ex:
                                console.log(had.get('Content-Type'));
                        e. headers.key -> mengambil semua key headers response
                        ex:
                               fetch('12.jpg')
                                .then(ew=>{
                                    const data= ew.headers;
                                    for(let ad of data.keys()){
                                        console.log(ad)
                                    }
                                }) 
                        f. headers.set => mentapkan nilai baru pada heders, dan akan menimpa headers yang lama;
                        ex:
                               let head= new Headers();
                                head.append("Content-Type","TEXT");
                                console.log(head.get('Content-Type'));
                                head.set('Content-Type','Aplication/Json')
                                console.log(head.get('Content-Type')); 
                    2. ok       => mengabalikan nilai bolean(false/true) apakah respon berhasil atau tidak,  (status di kisaran 200-299) 
                    3. redirected   => mencek pengalihan hasil(response), jika terjadi pengalihan (redirectednya true) kita harus melarang pengalihannya
                                ex:
                                cara 1
                                    fetch("12.jpg").then(function(response) {
    
                                        if (response.redirected) {
                                        console.log("Unexpected redirect");
                                        } else {
                                        console.log("OK");
                                        }
                                        return response.blob();
                                    }).then(function(imageBlob) {
                                        let imgObjectURL = URL.createObjectURL(imageBlob);
                                        console.log(imgObjectURL);
                                    });
                                    S
                                    karena pengaliah dengan caara 1 sangat memungkinkan terjadinya pemalsuaan pengalihan, maka kita cara 2 yang meyetel mode pengalihan ke "error"
                                cara 2
                                    fetch('data.txt',{
                                        redirect:"error"
                                    })
                                    .then(res => res.text())
                                    .then(data=>{
                                        const id = document.querySelector("#if");
                                        id.innerHTML=data;
                                        
                                    })
                    4. status   => berisi kode status dari response (200 -> sukses) (0 -> gagal)
                                    ex:                                        
                                        fetch('mhs.json')
                                        .then(res => console.log(res.status))
                    5. statusText => pesan status yang sesuai denga kode statusnya (jika kode status 200 makan status ok)\
                                    ex:                                        
                                        fetch('mhs.json')
                                        .then(res => console.log(res.statusText))
                    6. type => unutk melihat tipe response
                                    ex:
                                        fetch('mhs.json')
                                        .then(res => console.log(res.type))
                            ada beberapa tipe respon:
                                    1. basic    => respond normal, response  yang sama dengan semua headers yang diekspose kecuali, set-cookie dan set-cookie2 
                                    2. cors     => tipe respon yang di termia dari data sumber lain seperti api pihak ketiga, headers dan body bisa di akses
                                    3. error    => kesalah jaringan untuk mengkases data sumber, status y di hasilkan 0, header kosong dan tidak dapat di ubah, dan ini adalah hasil respon yuang di peroleh dari " Response.eror() "
                                    4. opaque   => respon tanpa cors
                                    5. opaqueredirect => permintaan pengambilan dengan ( redirect: "manual" ), response status 0 dan header kosong dan body null, dan trailer kosong
                    7. url  => ntuk melihat url response dari sumber data
                                    ex: 
                                    fetch('http://www.omdbapi.com/?apikey=a753a3ce&s=Avenger')
                                    .then(res=> console.log(res.url))
                    8 body
                        memliki dua buah properti
                            1. Body.body => pengembalian sederhana yang mengekspos readablestream (aliran yang dibaca dari byte data) konten tubuh
                                    ex: response.body();
                            2. Body.bodyUsed => menyimpan boleaan(true,false) yang matakan tubuh telah di gunakan atau belum dalam proses
                                    ex: fetch("mhs.json")
                                        .then(res=>{
                                            console.log(res.body);
                                            res.json();
                                            console.log(res.body);
                                        })
                - response (method)
                    1. clone()  => menciptakan clone dari objek respon dan di simpan kedalam variabel berbeda
                            ex:
                                fetch('12.jpg')
                                .then(res=> {
                                    const res1= res.clone();
                                    
                                    res.blob()
                                    .then(myblb =>{
                                        const url1= URL.createObjectURL(myblb);
                                        console.log(url1);
                                    })
                                    res1.blob()
                                    .then(mybl1 =>{
                                        const url2= URL.createObjectURL(mybl1);
                                        console.log(url2);
                                    })
                                })
                    2. error()  => mengembalikan respone objek ketika terjadi kesalahan jaringan
                                ex:
                    3. redirect()   => membuat respon baru dengn url yang berbeda
                                ex: responseObj.redirect('https://www.example.com', 302);
                    5. formData() => membaca respon dan mengembalikan promise yang di selesaikan dengan fromdata
                                ex: response.formData();
                    6. json() => mengambil respon dalam bentuk data json
                                ex: res.json();
                    7. text()=> mengemblakan data dalam bentuk text;
                                ex: res:text();
                    8. arrayBuffer() => mengambil response dan membacany sampai selesai, dan mengembalikan respon yang di jalankan file ArrayBuffer
                                ex: response.arrayBuffer();
*/

