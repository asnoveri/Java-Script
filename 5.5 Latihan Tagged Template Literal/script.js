// 1.  template literal sederhana

const nama ="asno";
const umur =25;
const status= "single";

console.log(`,halo nama saya :${nama}
,umur saya: ${umur}
,saya status: ${status}`);

// ...value -> disebut resparameter
function tes(string, ...values){
    return string.reduce((rslt,str,i) => `${rslt}${str} <h2>${values[i] || ''}</h2>`);
}

const df= tes`halo nama saya ${nama}, umur saya ${umur} , status ${status}`;

console.log(df);


// 2. embed exspresion
const agk=70;
const agk1=10;
console.log(`${(agk < 10)? 'true':'false'}`);
console.log(`${agk + agk1}`)

//3. html fragment

const data={
    nama:'Adit',
    umur:24,
    pekerjaan:'Web Devoplomnet'
};

const tmplt=`<h2>${data.nama}</h2>
<span>${data.umur}</span>
<p>${data.pekerjaan}</p>`;
// document.body.innerHTML=tmplt;
const kotak= document.querySelector(".kotak");
console.log(kotak.innerHTML=tmplt);


const dataArr=[{
       nama:"asno",
       umur:25,
       pekerjaan:"IT Staf",
       status: "Jomblo", 
    },
    {
        nama:"adit",
        umur:24,
        pekerjaan:"Mahasiswa",
        status: "Jomblo",         
    },
    {
        nama:"Arif",
        umur:23,
        pekerjaan:"Wirausaha",
        status: "Menikah", 
    }
];

const kotak1= document.querySelector(".kotak1");
    const tmplt2= `<div class="isi">
            ${dataArr.map(x=>`<ul>
                <li>${x.nama}</li>
                <li>${x.umur}</li>
                <li>${x.pekerjaan}</li>
                <li>${(x.status =="Menikah")? "Maried": "Single"}</li>
              </ul>`).join("")}
        </div>`;
        kotak1.innerHTML=tmplt2;