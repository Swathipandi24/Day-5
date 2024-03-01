//Write a “person” class to hold all the details.

class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  }
  
  // Example usage:
  let person1 = new Person("meera", 30, "female");
  let person2 = new Person("ravi", 25, "male");
  let person3 = new Person("rishika", 23, "female");
  let person4 = new Person("lalith", 20, "male");
  console.log(person1);
  console.log(person2);
  console.log(person3);
  console.log(person4);
  


  //output data

/* Person { name: 'meera', age: 30, gender: 'female' }
Person { name: 'ravi', age: 25, gender: 'male' }
Person { name: 'rishika', age: 23, gender: 'female' }
Person { name: 'lalith', age: 20, gender: 'male' } */