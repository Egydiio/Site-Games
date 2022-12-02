onload = () => {
    cards();
    plataformas();
    header();
    publishers();
  
    document.querySelector("#btn-0").onclick = () => cards();
    //document.querySelector("#btn-1").onclick = () => plataformas();
  };
  
  
  var url0 =
    "https://api.rawg.io/api/games?page=1&page_size=10&key=ceae9b5f1ee54613b0a882d31b4333ef";
  async function cards() {
    let str = "";
    let data = await fetch(url0).then((res) => res.json());
    let result = data.results;
    for (let index = 0; index < result.length; index++) {
      const card = result[index];
      str +=`<div class="col-12 col-sm-3 col-md-4 col-lg-3">
                <div class="card border border-0">
                    <h5 class="card-title fw-bold text-truncate">${card.name}</h5>
                    <div class="ratio" style="--bs-aspect-ratio: 45%;">
                        <img src="${card.background_image}" class="img-fluid w-100" style="height: 9rem;" alt="imagem card">
                    </div>
                    <br><br>
                    <h5 class="fs-6">Classificação: <span class="float-end">${card.rating}</span></h5>
                    <h5 class="fs-6">Data de lançamento: <span class="float-end">${card.released}</span></h5>
                    <div class="card-body">
                        <a href="detalhes.html?${card.id}"><button type="button" class="btn btn-secondary">Mais detalhes ...</button></a>
                    </div>
                </div>
            </div>`;
    }
    url0 = data.next;
    document.getElementById("cards").insertAdjacentHTML("beforeend", str);
  }
  
  var url1 = `https://api.rawg.io/api/platforms?page=1&page_size=10&key=ceae9b5f1ee54613b0a882d31b4333ef`;
  async function plataformas() {
    let data = await fetch(url1).then((res) => res.json());
    let str = "";
    let result = data.results;
    for (let index = 0; index < 3; index++) {
      const plataforma = result;
      str +=`<div class="col-12 col-sm-4 col-md-4">
                <div class="card border border-0">`;
                    if(index == 0){
                        str += `<h5 class="card-title fw-bold">${plataforma[1].name}</h5>
                                <img src="img/ps5.jpg">`;
                    } else if(index == 1){
                        str += `<h5 class="card-title fw-bold">${plataforma[3].name}</h5>
                                <img src="img/xbox.jpg">`;
                    } else {
                        str += `<h5 class="card-title fw-bold">${plataforma[5].name}</h5>
                                <img src="img/switch.jpg">`;
                    }        
            str += `<div class="card-body">
                        <p class="card-text">
                            <b>Principais jogos</b>
                        <ul class="lista">`;
                            for (let i = 1; i < 4; i++) {
                                if(index == 0){
                                    str += `<li>${plataforma[1].games[i].name}</li>`;
                                } else if(index == 1){
                                    str += `<li>${plataforma[3].games[i].name}</li>`;
                                } else {
                                    str += `<li>${plataforma[5].games[i].name}</li>`;
                                }
                            }
                str += `</ul>
                        </p>
                        <p class="card-text text-end">Mais detalhes ...</p>
                    </div>
                </div>
            </div>`;
    }
    url1 = data.next;
    document.getElementById("plata").insertAdjacentHTML("beforeend", str);
  }

  var url2 = `https://api.rawg.io/api/publishers?page=1&page_size=10&key=ceae9b5f1ee54613b0a882d31b4333ef`;
  async function publishers() {
    let data = await fetch(url2).then((res) => res.json());
    let str = "";
    for (let index = 0; index < 3; index++) {
      const plataforma = data.results[index];
      str +=`<div class="col-12 col-sm-4 col-md-4">
                <div class="card border border-0">
                    <h5 class="card-title fw-bold">${plataforma.name}</h5>`;
                    if(index == 0){
                        str += `<img src="img/ea.jpg">`;
                    } else if(index == 1){
                        str += `<img src="img/squareenix.jpg">`;
                    } else {
                        str += `<img src="img/microsoft.jpg">`;
                    }        
            str += `<div class="card-body">
                        <p class="card-text">
                            <b>Principais jogos</b>
                        <ul class="lista">`;
                            for (let i = 0; i < 3; i++) {
                                str += `<li>${plataforma.games[i].name}</li>`;
                            }
                str += `</ul>
                        </p>
                        <p class="card-text text-end">Mais detalhes ...</p>
                    </div>
                </div>
            </div>`;
    }
    url1 = data.next;
    document.getElementById("plata2").insertAdjacentHTML("beforeend", str);
  }

  var url3 = `https://api.rawg.io/api/games?page=1&page_size=20&key=ceae9b5f1ee54613b0a882d31b4333ef`;
  async function header() {
    let data = await fetch(url3).then((res) => res.json());
    let str = "";
    let result = data.results;
    for (let index = 0; index < 1; index++) {
      const header = result[19];
      str +=`<div class="col-md-6 col-lg-6 col-sm-3 pb-3 text-center" style="background-color: rgb(233, 233, 233);">
                <div class="formimg2" style="background-image: url('${header.background_image}')"></div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-3 pb-1" style="background-color: rgb(233, 233, 233);">
                <div class="card-body">`;
                    for (let i = 0; i < 1; i++) {
                        str += `<h5 class="card-title">${header.name}</h5>`;
                    }
            str += `<p><b>Sobre: </b> Team Fortress 2 é um jogo eletrônico free-to-play multijogador de tiro em primeira pessoa desenvolvido pela Valve, baseado em equipes e com foco em combates. Uma sequência para o Team Fortress Classic foi inicialmente lançado como parte da Orange Box em 10 de outubro de 2007 para Windows e então para o Xbox 360.</p>
                    <p><b>Publisher: </b> Microsoft Windows, macOS, Linux, GeForce Now, PlayStation 3, Xbox 360, Mac OS<b>&nbsp;&nbsp; Lançamento:</b> 10 de outubro de 2007</p>
                    <p><b>Gênero: </b> Tiro em primeira pessoa, Gratuito para jogar</p>
                </div>
            </div>`;
    url1 = data.next;
    document.getElementById("header").insertAdjacentHTML("beforeend", str);
    }
  }
  
  