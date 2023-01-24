function Person(fn, ln, ssn) {
  this.fname = fn;
  this.lname = ln;
  this.soc = ssn;
}

Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lname}`;
};

Person.prototype.getSSN = function() {
    if(!this.soc) return undefined;
    else return this.soc;
};

const patient2 = new Person("John", "Doe", undefined);
console.log(patient2.getFullName());
console.log(patient2.getSSN());