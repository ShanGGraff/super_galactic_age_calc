export default class Person {
  constructor (age) {
    this.age = age;
  }
  ageToMercuryYears() {
    let mercuryConversion = .24;
    return this.age * mercuryConversion;
  }
}