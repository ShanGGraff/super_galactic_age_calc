export default class Person {
  constructor (age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;

  }
  mercuryNumberConverter(number){
    return number * Math.round(.24 * 100)/ 100;
  }
  venusNumberConverter(number){
    return number * Math.round(.62 * 100)/ 100;
  }
  marsNumberConverter(number) {
    return number * Math.round(1.88 * 100)/ 100;
  }
  jupiterNumberConverter(number) {
    return number * Math.round(11.86 * 100)/ 100;
  }
  ageToMercuryYears() {
    return this.mercuryNumberConverter(this.age);
  }
  ageToVenusYears() {
    return this.venusNumberConverter(this.age);
  }
  ageToMarsYears() {
    return this.marsNumberConverter(this.age);
  }
  ageToJupiterYears() {
    return this.jupiterNumberConverter(this.age);
  }
  lifeExpectancyOnMercury() {
    let expectancy = this.mercuryNumberConverter(this.lifeExpectancy) - this.mercuryNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
  lifeExpectancyOnVenus() {
    let expectancy = this.venusNumberConverter(this.lifeExpectancy) - this.venusNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
}