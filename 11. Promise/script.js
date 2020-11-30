/* 
    Promise -> digunakan untuk mengatasi callback health
    
    devenisi promise -> object yang mempresentasikan keberhasilan / kegagalan sebuah even yang asynchronus di masa yang akan datang (janji)
    
    janji (terpenuhi / ingkar);
    
    states (fulfilled / rejected / pending)
    ket:
        states      = janji
        fulfilled   = terpenuhi
        rejected    = ingkar
        pending     = waktu tunggu sebelum janji (terpenuhi/ tidak) 

    dari tiga keadaan (fulfilled / rejected / pending) di atas kita bisa menjlankannya dengan tiga buah fugnsi callbak.
    callback (reslove / rejected / finally)
    ket:
        resolve     = dibuat ketika janji terpenuhi
        reject      = dibuat ketika janji tidak terpenuhi
        finally     = dibuat ketika waktu tunggu selesai (terpenuhi / ingkar)

        ada aksi yang kan kita lakukan jika janjinya terpenuhi atau tidak terpenuhi
        aksi: (then / catch)
        ket:
            then    = digunakan bila janjinya terpenuhi (menjlankan resolve)
            catch   = digunakan bila janjinya tidak terpenuhi (menjlankan reject)
    
    callback healt -> terlalu banyak callbak

    note: * promise biasa di pakai ketiak kita menrequest data pada sebuah API

    promise.all() = method yang digunakan menjlan semeua promise yang ada.
*/

// Contoh1
/* let ditepati= true;
const janji1= new Promise((resolve,reject)=>{
    if(ditepati){
        resolve("Janjinya ditepati");
    }else{
        reject("Janji Tinggal Janji");
    }
});

console.log(janji1);

janji1
    .then(response => console.log(`ok ${response}`))
    .catch(response => console.log(`not ok ${response}`))
 */


// contoh2

/* let ditepati=true;
        const janji2= new Promise((resolve,reject) =>{
            if(ditepati){
                setTimeout(()=>{
                    resolve('janji ditepati setelah menunggu beberapa waktu');
                },2000);
            }else{
                setTimeout(()=>{
                    resolve('janji tidak ditepati setelah menunggu beberapa waktu');
                },2000);
            }
        })

        console.log('mulai');
        // console.log(janji2.then(() => console.log(janji2))); 

        console.log(janji2
            .finally(() => console.log('selesai menunggu'))
            .then(rs => console.log(rs))
            .catch(rs=> console.log(rs))
            );

        console.log('selesai');
 */

//  contoh3
/* 
const mhs= new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve([{
            Nama: 'Asno',
            umur: 25,
            jurusan: 'Sistem INformasi'
        }])
    },3000);
});

const dosen= new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve([{
            Nama: 'Asno',
            umur: 25,
            Matkul_ampu:"pemograman web"
        }])
    },3000);
});

// mhs.then(res=> console.log(res));
// dosen.then(res=> console.log(res));
    console.log("loding mulai");
    Promise.all([mhs,dosen])
        .finally(() => console.log('Loding Selesai'))
        .then(res =>{
            console.log(res);
            const [mhs,dosen]=res;
            console.log(mhs);
            console.log(dosen)
        })
        .catch(res => console.log(res)) */

        


function showConten(){
    return `<button id="btn">CLICK</button>
            <div class="kotak">Loding...</div>`;                
    }
    document.querySelector(".container").innerHTML=showConten();

function tesPromise(){
    return  document.querySelector("#btn").addEventListener('click', function (){       
        const mhs= new Promise((resolve, reject)=>{
            setTimeout(() =>{
                resolve([{
                    Nama: 'Asno',
                    umur: 25,
                    jurusan: 'Sistem INformasi'
                }])
            },3000);
        });

        const dosen= new Promise((resolve,reject)=>{
            setTimeout(() =>{
                resolve([{
                    Nama: 'Asno',
                    umur: 25,
                    Matkul_ampu:"pemograman web"
                }])
            },3000);
        });

        
            
         const kotaklod= document.querySelector(".kotak");
         kotaklod.style.display = "block";
            kotaklod.classList.add("star-anime");
            
            
            Promise.all([mhs,dosen])
                .finally(() =>  kotaklod.classList.remove("star-anime"))
                .finally(() =>  kotaklod.style.display = "none")
                .then(res =>{
                    console.log(res);
                    const [mhs,dosen]=res;
                    console.log(mhs);
                    console.log(dosen)
                })
                .catch(res => console.log(res))

    });
}
    
tesPromise();

    
