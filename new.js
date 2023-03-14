// example1 es6 
class person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person('shohan', 'rahman', 40000);
console.log(heroPerson);

const friendlyPerson = new person('samiul', 'hasan', 60000);
console.log(friendlyPerson);


// example2 old way
function person2(name, address, phone){
    this.name = name;
    this.address = address;
    this.phone = phone;
}
const oldPerson = new person2('limon', 'hossain', 577827762);
console.log(oldPerson);