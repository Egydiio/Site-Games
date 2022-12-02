const id = location.href.split("?")[1];

onload = () => {
detalhes();

}

async function detalhes() {
    let str = "";
    let data = await fetch(`https://api.rawg.io/api/games/${id}?key=ceae9b5f1ee54613b0a882d31b4333ef`).then((res) => res.json());
    let genero= "";
    console.log(data, 'data')
    for(let i=0;i<data.genres.length;i++){
     let gen=data.genres[i];
     genero+= gen.name+", ";
    }
    let publi= "";
    for(let i=0;i<data.publishers.length;i++){
        let publ=data.publishers[i];
        publi+= publ.name+", ";
    }

    str += `<div class="col-md-6 col-lg-6 col-sm-3 pb-3 pt-3 text-center" style="background-color: rgb(233, 233, 233);">
                <img class="formimg2" src="${data.background_image}">
            </div>
            <div class="col-md-6 col-lg-6 col-sm-3 pb-1" style="background-color: rgb(233, 233, 233);">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p><b>Sobre: </b>${data.description} </p>
                    <p><b>Publisher: </b>${publi} <b>&nbsp;&nbsp;</p>
                    <p><b>Gênero: ${genero}</p>
                </div>
            </div>`;
    document.getElementById("detalhes").insertAdjacentHTML("beforeend", str);
}