//function fetch pokemon api using async and await
async function resData(api) {
  let res = await fetch(api, {
    method: "GET",
  });

  return res.json();
}

// calling function to get api data
resData("https://pokeapi.co/api/v2/pokemon?offset=0&limit=55").then((res) => {
  
  for (let i = 0; i < res.results.length; i++) {
    resData(res.results[i].url).then((url) => {
      let image = url.sprites.other.dream_world.front_default;
      let name = url.name;
      let weight = url.weight;
      let moves = url.moves[0].move.name;
      let abilities = url.abilities[0].ability.name;

      let content = `
        <div class="card" style="width: 15rem; height:25em;  border: 2px solid black; ">
        <img src="${image}" class="card-img-top my-1"  style="height:12em" alt="...">
        <div class="card-body" style="height:13em">
          <h5 class="card-title"><b>Name: </b>${name}</h5>
          <p class="card-text"><b>Weight: </b>${weight}</p>
          <p class="card-text"><b>Move: </b>${moves}</p>
          <p class="card-text"><b>Ability: </b>${abilities}</p>
        </div>
      </div>
        `;

      //dom creation to append pokemon details
      let details = document.querySelector(".container-lg");
      let details1 = document.createElement("div");
      details1.setAttribute("class", "detail_div");
      details1.innerHTML = content;
      details.append(details1);
    });
  }
})
.catch((rej)=>{
  console.log(rej);
})

