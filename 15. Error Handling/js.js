const search = document.querySelector('.search');
search.addEventListener('click',async function(){
    try{
        const valu= document.querySelector(".inpt-src").value;
        const movies= await getMovies(valu);
        updatInter(movies);
    }catch(err){
        // console.log(err);
        alert(err);
    }
});

function getMovies(param){
    return fetch(`http://www.omdbapi.com/?apikey=a753a3ce&s=${param}`)
        .then(resp => {
           if(resp.ok === false){
            //    throw new Error(resp.statusText);
               throw new Error(resp.statusText);
           }else{
               return resp.json();
           }
           
        })
        .then(resp => {
           
        if(resp.Response === "False"){
            throw new Error(resp.Error);
        }else{
            return resp.Search;

        }
        });
}

function updatInter(mopie){
        let konten ="";
        mopie.forEach(m => {
            konten += showCard(m);             
        });
        const kon= document.querySelector("#konten");
        kon.innerHTML=konten;
}

document.addEventListener('click',async function(e){
    if(e.target.classList.contains('tmbl')){
        try{
            const imdbID=e.target.dataset.imdbid;
            const detailM= await getDetailm(imdbID);
            updateDetil(detailM);
        }catch(err){
            alert(err);
        }
        
    }
})

function getDetailm(imdbID){
    return fetch(`http://www.omdbapi.com/?apikey=a753a3ce&i=${imdbID}`)
    .then(resp=> {
        if(!resp.ok){
            throw new Error(resp.statusText);
        }else{
            return resp.json();
        }
            
    })
    .then(r=> r)
}

function updateDetil(param){
    const moviedetail= showMoviedetail(param);
    const modal=document.querySelector(".modal-body");
    modal.innerHTML=moviedetail;
}


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


// throw new Error(); => digunakan untuk membuat eror baru dan di masukan atau di tampung pada catch