//Template Literal
//1. dibuat dengan tanda back tick (`)
//2. multi-line string
//3. embedded exspression
//4. html fragments
//  1. Sederhana
// const data = {
//     nama: "asno",
//     umur: 25
// };
// const el = `<div class="box">
//     <h1>${data.nama}</h1>
//     <span class="lbl">${data.umur}</span>
// </div>`;
// document.body.innerHTML = el;
//  2. dengan looping
// const arr = [{
//         nama: 'asno',
//         umur: 27,
//     },
//     {
//         nama: 'adir',
//         umur: 22,
//     },
//     {
//         nama: 'YOTi',
//         umur: 17,
//     },
// ];

// const elw = `<div class="isi">
//     ${arr.map(x=> `<ul>
//         <li>${x.nama}</li>
//         <li>${x.umur}</li>
//     </ul>`).join("")}
// </div>`;
// document.body.innerHTML = elw;
// //  3 kondisi
// const data = [{
//         nama: "asno",
//         umur: 20,
//     },
//     {
//         nama: "adir",
//         umur: 23,
//         status: "jomblo"
//     }
// ];

// const el = `<div class="isi">
//     ${data.map(x=>`<ul>
//     <li>${x.nama}</li>
//     <li>${x.umur}</li>
//     <li>${x.status ? x.status: " "}</li>
//     </ul>`).join("")}

// </div>`;
//  4. nested, bersarang
// const data = {
//     nama: "asno",
//     umur: 25,
//     skil: ['apdbs', 'c++', 'java', 'php']
// };

// const el = `<div class="isi">
//     <h2>${data.nama}</h2>
//     <p>${data.umur}</p>
//     <ul>
//     ${data.skil.map(x=> `
//         <li>${x}</li>
//     `).join("")}
//     </ul>
//     </div>`;
// document.body.innerHTML = el;


//5. exspression interpolation
//6. tagged template