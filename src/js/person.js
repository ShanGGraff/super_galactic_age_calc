export default class Person {
  constructor (age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.yearsLeft = lifeExpectancy - age;

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
    let expectancy = this.mercuryNumberConverter(this.yearsLeft);
      if (expectancy === 0) {
          return "You are the same age as the life expectancy on this planet.";
      } else if (expectancy < 0) {
        let convertToPositive = Math.floor(expectancy * -1* 100)/ 100;
          return `You have lived ${convertToPositive} years beyond life expectancy on this planet.`
      } else {
          return Math.floor(expectancy * 100)/ 100;
      }
  }
  yearsLeftOnVenus() {
    let expectancy = this.venusNumberConverter(this.yearsLeft);
    if (expectancy === 0) {
        return "You are the same age as the life expectancy on this planet.";
    } else if (expectancy < 0) {
      let convertToPositive = Math.floor(expectancy * -1* 100)/ 100;
        return `You have lived ${convertToPositive} years beyond life expectancy on this planet.`
    } else {
        return Math.floor(expectancy * 100)/ 100;
    }
  }
  yearsLeftOnMars() {
    let expectancy = this.marsNumberConverter(this.yearsLeft);
    if (expectancy === 0) {
        return "You are the same age as the life expectancy on this planet.";
    } else if (expectancy < 0) {
      let convertToPositive = Math.floor(expectancy * -1* 100)/ 100;
        return `You have lived ${convertToPositive} years beyond life expectancy on this planet.`
    } else {
        return Math.floor(expectancy * 100)/ 100;
    }
  }
  yearsLeftOnJupiter() {
    let expectancy = this.jupiterNumberConverter(this.yearsLeft);
    if (expectancy === 0) {
        return "You are the same age as the life expectancy on this planet.";
    } else if (expectancy < 0) {
      let convertToPositive = Math.floor(expectancy * -1* 100)/ 100;
        return `You have lived ${convertToPositive} years beyond life expectancy on this planet.`
    } else {
        return Math.floor(expectancy * 100)/ 100;
    }
  }
}