export default class Person {
  constructor (age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;

  }
  mercuryNumberConverter(number){
    return Math.round(number / .24 *100)/ 100;
  }
  venusNumberConverter(number){
    return Math.round(number / .62 *100)/ 100;
  }
  marsNumberConverter(number) {
    return Math.round(number / 1.88 *100)/ 100;
  }
  jupiterNumberConverter(number) {
    return Math.round(number / 11.86 *100)/ 100;
  }
  ageToMercuryYears() {
    return this.mercuryNumberConverter(this.age);
  }
  // ageToVenusYears() {
  //   return this.venusNumberConverter(this.age);
  // }
  // ageToMarsYears() {
  //   return this.marsNumberConverter(this.age);
  // }
  // ageToJupiterYears() {
  //   return this.jupiterNumberConverter(this.age);
  // }
  // lifeExpectancyOnMercury() {
  //   let expectancy = this.mercuryNumberConverter(this.lifeExpectancy) - this.mercuryNumberConverter(this.age);
  //   return Math.floor(expectancy * 100)/ 100;
  // }
  // lifeExpectancyOnVenus() {
  //   let expectancy = this.venusNumberConverter(this.lifeExpectancy) - this.venusNumberConverter(this.age);
  //   return Math.floor(expectancy * 100)/ 100;
  // }
}