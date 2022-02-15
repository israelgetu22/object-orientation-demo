let person = {
  firstName: "Israel",
  lastName: "Getu",
  age: 26,
};

// console.log(person.firstName);
// console.log(person["firstName"]);

// favorites:{
//       movies: {
//         movie1:""
//         movie2: ""
//        },
//       aritsts:
//           aritsts: ""
//           aritsts: ""
//       }
//     }

// }

// let meal = {
//   appetizer: "Chips",
//   entree: "Brisket ",
//   dessert: "Ice Cream",
//   drinl: "water"
// }

// const {dessert} = meal;
// console.log(dessert);

// const {entree} = bestFood;
// console.log(entree)

// const{entree: bestFood,drink:bestFoodever} = meal;

// const{entree: bestFood} = meal.entree ;

//loop in the case object
for (let attribute in person) {
  console.log(person[attribute]); // check in dot attribute
  console.log(person.attribute); // it will not access values
}

person.job = "Instructor";
person["hairColor"] = "Balck";
//person [eyeColor] = "Brown";
console.log(person);

delete person.age;
console.log(person);

//Class

class Animals {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
}

greeting() {
  console.log (`Hi, I am ${this.name}. I am of species ${this.species})`); //this name !== to zebra 
}
}

let zebera = new Animals("Zebra", "Mammal", "Medium");
console.log(zebera.size);
zebera.greeting();

// extends 

class Reptiles extends Animals{
  constructor(name, species, size, cute) {
    super (name, species,size )
    this.cute = false;
  }
    
  }

changeCute(){
  if (this.cute === false){
       this.cute = true
  }else {
    this.cute = false;
  }
}
}
let snake =  new Reptiles ("Ball Python","Snake","Smol")
snake.changeCute();
snake.changeCute();
