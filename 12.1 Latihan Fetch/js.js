// fetch('12.jpg')
// .then(res=>{
   
//     for(let a of res.headers.entries()){
//         console.log(a);
//     }

//     res.headers.forEach((e,b) => {
//         console.log(`${e}: ${b}`);
//     });
// })


// const had= new Headers();
// had.get('Not-Set');
// console.log(had.get('COntent-Type'));

// fetch('12.jpg')
// .then(ew=>{
//     const data= ew.headers;
//     for(let ad of data.keys()){
//         console.log(ad)
//     }
// })


// let head= new Headers();
// head.append("Content-Type","TEXT");
// console.log(head.get('Content-Type'));
// head.set('Content-Type','Aplication/Json')
// console.log(head.get('Content-Type'));


// var myRequest = new Request('12.jpg');

// fetch(myRequest).then(function(response) {
//   console.log(response.ok); // returns true if the response returned successfully
//   response.blob().then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     console.log(objectURL);
//   });
// });


// fetch('http://www.omdbapi.com/?apikey=a753a3ce&s=Avenger')
// .then(e=>e.json())
// .then(e=>{
//     console.log(e);
// })

// fetch("12.jpg").then(function(response) {
    
//     if (response.redirected) {
//       console.log("Unexpected redirect");
//     } else {
//       console.log("OK");
//     }
//     return response.blob();
//   }).then(function(imageBlob) {
//     let imgObjectURL = URL.createObjectURL(imageBlob);
//     console.log(imgObjectURL);
//   });


// fetch('data.txt',{
//     redirect:"error"
// })
// .then(res => res.text())
// .then(data=>{
//     const id = document.querySelector("#if");
//     id.innerHTML=data;
    
// })


// fetch('mhs.json')
// .then(res => console.log(res.type))

// fetch('12.jpg')
// .then(res=>{
//     console.log(res.url);
//     return res.blob();
// })
// .then(res => {
//     const url= URL.createObjectURL(res);
//     console.log(url);
//     document.querySelector("#img").src=url;
// })

// fetch("mhs.json")
// .then(res=>{
//     console.log(res.body);
//     res.json();
//     console.log(res.body);
// })


// fetch('12.jpg')
// .then(res=> {
//     const res1= res.clone();
    
//     res.blob()
//     .then(myblb =>{
//         const url1= URL.createObjectURL(myblb);
//         console.log(url1);
//     })
//     res1.blob()
//     .then(mybl1 =>{
//         const url2= URL.createObjectURL(mybl1);
//         console.log(url2);
//     })
   
// })

// fetch('mhs.json')
// .then(res => res.text())
//     .then(res=>{
//         console.log(res);
//     })





// mengambil data dari sumber 
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
// .then(res => res.json())
// .then(res => console.log(res));



// menmgirimkan data ke sumber
// let data={
//     id:6,
//     name: "Asno Veri",
//     email: "asnoveri125@mail.com",
//     body: "lorem"
// }

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments',{
//     method:'POST',
//     headers:{
//         'Content-Type':'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(data)
// })
// .then(res=>res.json())
// .then(r=>{
//     console.log(r);
// })
let data={
    title:"Judul",
    body:"lorem"
}
fetch('https://jsonplaceholder.typicode.com/users/1/posts',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
})
.then(res => res.json())
.then(res => console.log(res));