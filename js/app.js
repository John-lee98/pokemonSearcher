function display(url) {
  // function calls data from PokeAPI
  $.getJSON("https://pokeapi.co/api/v2/pokemon/" + url, function(data) {
    console.log(data);

    let pokemonName = data.name; // gathering information from the PokeAPI
    let frontImage = data.sprites.front_default;
    let backImage = data.sprites.back_default;
    let typeList = [];

    for (let i = 0; i < data.types.length; i++) {
      // for loop that adds pokemon type(s) to typeList
      typeList.push("[" + data.types[i].type.name + "]");
    }

    pokemonName = capitalizeFirstLetter(pokemonName); // function call that capitalizes the name

    $(".pokemonName").html(pokemonName); // adding to the HTML
    $(".spriteImage").attr("src", frontImage);
    $(".bSpriteImage").attr("src", backImage);
    checkType(typeList);

    $("#pokemonSearch").val(""); // resets the input search value to "" after submit
    $(".feedback").html(""); // resets the feedback to "" after successful submit
  }).fail(function() {
    // catch invalid input in pokemonSearch
    $(".feedback").html(url + " does not exist. Please try searching again!");
  });
}

function getPokemonName() {
  // gathers user input from pokemonSearch text box
  let newPokemon = document.getElementById("pokemonSearch").value;
  newPokemon = newPokemon.toLowerCase();
  display(newPokemon);
}

function capitalizeFirstLetter(string) {
  // function capitalizes pokemon name
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function enterFunction(e) {
  // function submit form on enter key press
  e = e || window.event;
  var key = e.keyCode;
  if (key === 13) {
    getPokemonName();
    return false;
  }
}

/*function checkInput(data) {
  if ($("#pokemonSearch").length > 0) {
    console.log(
      "Pokemon: " + data + " does not Exist! Please try another search!"
    );
  }
}*/

function checkType(array) {
  // function check pokemon typing
  if (array.length === 1) {
    $("#typeList2").attr("src", "");
    let image = document.getElementById("typeList2");
    image.style.height = "0";
    image.style.width = "0";
  }
  for (let i = 0; i < array.length; i++) {
    let image = document.getElementById("typeList" + (i + 1));
    image.style.height = "8%";
    image.style.width = "8%";

    switch (array[i]) {
      case "[grass]":
        $("#typeList" + (i + 1)).attr("src", "images/Grass.png");
        break;
      case "[fire]":
        $("#typeList" + (i + 1)).attr("src", "images/Fire.png");
        break;
      case "[water]":
        $("#typeList" + (i + 1)).attr("src", "images/Water.png");
        break;
      case "[electric]":
        $("#typeList" + (i + 1)).attr("src", "images/Electric.png");
        break;
      case "[ground]":
        $("#typeList" + (i + 1)).attr("src", "images/Ground.png");
        break;
      case "[rock]":
        $("#typeList" + (i + 1)).attr("src", "images/Rock.png");
        break;
      case "[ghost]":
        $("#typeList" + (i + 1)).attr("src", "images/Ghost.png");
        break;
      case "[psychic]":
        $("#typeList" + (i + 1)).attr("src", "images/Psychic.png");
        break;
      case "[flying]":
        $("#typeList" + (i + 1)).attr("src", "images/flying.png");
        break;
      case "[bug]":
        $("#typeList" + (i + 1)).attr("src", "images/Bug.png");
        break;
      case "[ice]":
        $("#typeList" + (i + 1)).attr("src", "images/Ice.png");
        break;
      case "[steel]":
        $("#typeList" + (i + 1)).attr("src", "images/Steel.png");
        break;
      case "[dragon]":
        $("#typeList" + (i + 1)).attr("src", "images/Dragon.png");
        break;
      case "[normal]":
        $("#typeList" + (i + 1)).attr("src", "images/Normal.png");
        break;
      case "[fighting]":
        $("#typeList" + (i + 1)).attr("src", "images/Fighting.png");
        break;
      case "[dark]":
        $("#typeList" + (i + 1)).attr("src", "images/Dark.png");
        break;
      case "[fairy]":
        $("#typeList" + (i + 1)).attr("src", "images/Fairy.png");
        break;
      case "[poison]":
        $("#typeList" + (i + 1)).attr("src", "images/Poison.png");
        break;
    }
  }
}
