class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
}
class Cat extends Pet {
  meow() {
    return `${this.name} meows!`;
  }
}
class Dog extends Pet {
  bark() {
    return `${this.name} barks!`;
  }
}
