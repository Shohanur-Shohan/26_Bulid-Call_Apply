function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"


// example ChatGPT
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  const john = new Person('John', 25);
  john.greet(); // prints "Hello, my name is John and I am 25 years old."


  //In this example, we define a constructor function 'Person' that takes a 'name' and age parameter and sets them as properties of the newly created object using the this keyword.
  //We then add a greet method to the 'Person' prototype using the prototype property of the constructor function. This method can be called on any instance of 'Person' and will log a greeting message containing the 'name' and age properties.
  //Finally, we create a new 'Person' instance called john and call the greet method on it, which logs the greeting message to the console.