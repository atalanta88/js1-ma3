// question 1

(a, b) => a - b;

// question 2

function loadData() {
  return new Promise((resolve, reject) => {
    const url = `https://api.rawg.io/api/games?genres=sports`;
    fetch(url)
      .then(data => data.json())
      .then(response => {
        const gameNames = response.results.map(game => {
          return game.name;
        });
        resolve(gameNames);
      });
  });
}

loadData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    window.location.href = "error.html ";
  });

// question 3

let changeAnimal = "These cats are outrageous";
changeAnimal = changeAnimal.replace(/cats/gi, "giraffes");

console.log(changeAnimal);

// question 4

// question 5

const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// question 6
const parent = document.querySelector(".animals");

let liElement = document.createElement("li");
liElement.className = "parrots";

console.log(parent);

// question 7
