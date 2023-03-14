const normalPerson = {        //object
    firstName :'shohan',
    lastName : 'rahman',
    salary: 100000,
    getFullname: function(){
        console.log(this.firstName, this.lastName); //inside call //method1
    },
    chargeBill: function(amount, tips, tax){        //tips tax extra for example
        this.salary = this.salary - amount - tips - tax;         //method2
        return this.salary;
    }
}
// console.log(normalPerson); //outside call

// normalPerson.chargeBill(20000);
// console.log(normalPerson.salary);

const heroPerson = {             //object
    firstName: 'Hero',
    lastName: 'Alom',
    salary: 40000
}
const friendlyPerson = {       //object
    firstName: 'samiul',
    lastName: 'hasan',
    salary: 30000   
}
// normalPerson.chargeBill();

// example of bind 1
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(5000);  //one +
// heroChargeBill(10000); //two
// console.log(heroPerson.salary);  // heroPerson_salary 40000 - heroChargeBill( Amount );
// console.log(normalPerson.salary);

// // example of bind 2
// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(10000);
// console.log(friendlyPerson.salary);


// example 3 small way
normalPerson.chargeBill.call(heroPerson, 1000, 500, 100);       //amount, tips, tax
// normalPerson.chargeBill.call(friendlyPerson, 2000, 200, 50);  
console.log(heroPerson.salary);
// console.log(friendlyPerson.salary);

// example 4 with apply
normalPerson.chargeBill.apply(friendlyPerson, [3000, 500, 300]); //apply uses array
normalPerson.chargeBill.apply(friendlyPerson, [5000, 500, 300]); 
console.log(friendlyPerson.salary);

