class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = []
  }
  eat(someFood){
    if(this.stomach.length < 10)

    this.stomach.push(someFood)
  }

  poop(){
    this.stomach = []
  }
  toString(){
    return `${this.name} ${this.age}`;
  }



}


const cody = new Person({
  name: 'cody',
  age: 26,

})


console.log(cody)
