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
  ageToVenusYears() {
    return this.venusNumberConverter(this.age);
  }
  ageToMarsYears() {
    return this.marsNumberConverter(this.age);
  }
  ageToJupiterYears() {
    return this.jupiterNumberConverter(this.age);
  }
  yearsLeftOnMercury() {
    let expectancy = this.mercuryNumberConverter(this.lifeExpectancy) - this.mercuryNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
  yearsLeftOnVenus() {
    let expectancy = this.venusNumberConverter(this.lifeExpectancy) - this.venusNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
  yearsLeftOnMars() {
    let expectancy = this.marsNumberConverter(this.lifeExpectancy) - this.marsNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
  yearsLeftOnJupiter() {
    let expectancy = this.jupiterNumberConverter(this.lifeExpectancy) - this.jupiterNumberConverter(this.age);
    return Math.floor(expectancy * 100)/ 100;
  }
}