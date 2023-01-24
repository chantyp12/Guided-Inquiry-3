class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }

  exercise() {
    console.log("Running is fun! - said no one ever");
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
  }

  listLanguages() {
    console.log(`${this.name} knows: ${this.languages.join(", ")}`);
  }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const programmer1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
console.log(programmer1.listLanguages());
person1.exercise();
person1.fetchJob();