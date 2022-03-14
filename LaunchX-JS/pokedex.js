/*const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/bulbasaur`;
    fetch(url).then((res) => {
        //console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default; 
        console.log(pokeImg);
        pokeImg(pokeImg);
    })// Acceder a la informacion que se tiene en las URL anterior
}

fetchPokemon();
const pokeImg = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
//pokeImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");

const imprimir = () => {
        const pokeName = document.getElementById("pokeName"); // Se buscara en el documento .js el ID copn el nobre seleccionado en la funcion
        let pokeInput = pokeName.value;
        console.log("Hola" + pokeInput);
}
*/
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}