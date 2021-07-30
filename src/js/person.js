import { timers } from "jquery";

export default class Person {
  constructor (age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;

  }
  ageToMercuryYears() {
    let mercuryConversion = .24;
    return this.age * Math.round(mercuryConversion * 100)/ 100;
  }
  ageToVenusYears() {
    let venusConversion = .62;
    return this.age * Math.round(venusConversion * 100)/ 100;
  }
  ageToMarsYears() {
    let marsConversion = 1.88;
    return this.age * Math.round(marsConversion * 100)/ 100;
  }
  ageToJupiterYears() {
    let jupiterConversion = 11.86;
    return this.age * Math.round(jupiterConversion * 100)/ 100;
  }
}