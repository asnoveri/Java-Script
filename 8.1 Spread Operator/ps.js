/* 
    Spread operator 
    -> sebuah operator yang memecah iterable menjadi single elemen

    contoh:
*/
    // const data=["asno","veri","adir"];
    // console.log(data);
    // console.log(...data);
    // console.log(...data[0]);

    // kapan di gunakan spread operator
    // 1. u mengabungkan 2 array
            // const mhs=["asno","veri","adir"];
            // const mk=["Java", "Php","AGAMA"];
            // const gbng=[...mhs,'aji',...mk];

            // console.log(gbng);

    // 2. mencopy array    
        // const mhs=["asno","veri","adir"];
        // const mhs1=mhs;

        // jika mengunakan seperti cara di atas, ada masalah yaitu jika kita merubah isi array di array penampung hasil copyaanya, maka di array aslinya akan ikutan berubah juga
        
        // mhs1[0]="adit";
        // console.log(mhs);    
        // console.log(mhs1);

        // agar terhindar dari masalah di atas, kita isa mengunkan cara berikut

        // const mhs=["asno","veri","adir"];
        // const mhs1=[...mhs];
        // mhs1[0]="TAIEK";
        // console.log(mhs1);
        // console.log(mhs);
        

        
    // 3.

    // const nama= document.querySelector(".nama");
    // const hrf= [...nama.textContent].map(h=> `<span>${h}</span>`).join("");
    // nama.innerHTML=hrf;