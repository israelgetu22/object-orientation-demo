let person = {
  firstName: "Israel",
  lastName: "Getu",
  age: 26,

  //console.log(person.firstName);
  //console.log(person["firstName"]);

  favorites: {
    movies: {
      movie1: " Sing Street",
      movie2: "Into the Spiderverse",
    },
    aritsts: {
      aritsts1: "Jay-z",
      aritsts2: "Dr Dre",
    },
  },
};

//console.log(person.favorites: movie2);

let meal = {
  appetizer: "Chips",
  entree: "Brisket ",
  dessert: "Ice Cream",
  drink: "water",
};

const { dessert } = meal;
console.log(dessert);

const { entree: bestFood, drink: bestDrinkever, appetizer } = meal;
// const bestFood = meal.entree;
// const bestDrinkever = meal.drink;
// const appetizer = meal.appetizer;

console.log(bestFood);
console.log(bestDrinkever);
console.log(appetizer);

//for loop
for (let attribute in person) {
  console.log(attribute);
  // console.log(person[attribute]); //  it works to get the value
  //console.log(person.attribute); // it will not access values and not works
}

person.job = "Instructor";
person["hairColor"] = "Balck";
//person [eyeColor] = "Brown"; error coz ""
console.log(person);

delete person.age;
console.log(person);

//Class

class Animals {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size; //this is a funcuon no need to put comma
  }

  greeting() {
    console.log(`Hi, I am ${this.name}. I am of species ${this.species})`); //this name !== to zebra
  }
}

let zebra = new Animals("Zebra", "Mammal", "Medium");
console.log(zebra.size);
console.log(zebra);
zebra.greeting();

// extends

class Reptiles extends Animals {
  constructor(name, species, size, cute) {
    super(name, species, size);
    this.cute = false;
  }

  changeCute() {
    if (this.cute === false) {
      this.cute = true;
    } else {
      this.cute = false;
    }
  }
}

let snake = new Reptiles("Ball Python", "Snake", "Smol");
snake.changeCute();
console.log(snake);
