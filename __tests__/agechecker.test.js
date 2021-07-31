import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(72, 71);
  });

  test("should create a person object with the person's age and life expectancy", () => {
    expect(person.age).toEqual(72);
    expect(person.lifeExpectancy).toEqual(71);
    expect(person.yearsLeft).toEqual(-1);
  });
  test("should return the age of person in Mercury years", () => {
    expect(person.ageToMercuryYears()).toEqual(300);
  });
  test("should return the age of person in Venus years", () => {
    expect(person.ageToVenusYears()).toEqual(116.13);
  });
  test("should return the age of person in Mars years", () => {
    expect(person.ageToMarsYears()).toEqual(38.30);
  });
  test("should return the age of person in Jupiter years", () => {
    expect(person.ageToJupiterYears()).toEqual(6.07);
  });
  test("should return the amount of years left on Mercury", () => {
    expect(person.yearsLeftOnMercury()).toEqual("You have lived 4.17 years beyond life expectancy on this planet.");
  });
  test("should return the amount of years left on Venus", () => {
    expect(person.yearsLeftOnVenus()).toEqual("You have lived 1.61 years beyond life expectancy on this planet.");
  });
  test("should return the amount of years left on Mars", () => {
    expect(person.yearsLeftOnMars()).toEqual("You have lived 0.53 years beyond life expectancy on this planet.");
  });
  test("should return the amount of years left on Jupiter", () => {
    expect(person.yearsLeftOnJupiter()).toEqual("You have lived 0.08 years beyond life expectancy on this planet.");
  });
});