tampilData("Avenger");

$(".search").click(function(){
   let valu=$(".inpt-src").val();
   tampilData(valu);  
});

function tampilData(valu){
    return $.ajax({
        url:'http://www.omdbapi.com/?apikey=a753a3ce&s='+ valu,
        success: result =>{
           const  movies = result.Search;
           let konten = "";
           movies.forEach(m =>{
               konten += showCard(m);
            });

           $("#konten").html(konten);
           $(".tot").html(result.totalResults)
           
           $(".tmbl").click(function(){
                const imdbID= $(this).data('imdbid');
                $.ajax({
                    url:`http://www.omdbapi.com/?apikey=a753a3ce&i=${imdbID}`,
                    success: hasil=> {
                        const moviedetail= showMoviedetail(hasil);
                        $(".modal-body").html(moviedetail);
                    },
                    error: er =>{
                        console.log(er.responseText);
                    }
                });
            });
        },
        error: er => {
            console.log(er.responseText);
        }
    });
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

