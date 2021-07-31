import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(71, 71);
  });

  test("should create a person object with the person's age and life expectancy", () => {
    expect(person.age).toEqual(71);
    expect(person.lifeExpectancy).toEqual(71);
    expect(person.yearsLeft).toEqual(0);
  });
  test("should return the age of person in Mercury years", () => {
    expect(person.ageToMercuryYears()).toEqual(295.83);
  });
  test("should return the age of person in Venus years", () => {
    expect(person.ageToVenusYears()).toEqual(114.52);
  });
  test("should return the age of person in Mars years", () => {
    expect(person.ageToMarsYears()).toEqual(37.77);
  });
  test("should return the age of person in Jupiter years", () => {
    expect(person.ageToJupiterYears()).toEqual(5.99);
  });
  test("should return the amount of years left on Mercury", () => {
    expect(person.yearsLeftOnMercury()).toEqual("You are the same age as the life expectancy on this planet.");
  });
  test("should return the amount of years left on Venus", () => {
    expect(person.yearsLeftOnVenus()).toEqual("You are the same age as the life expectancy on this planet.");
  });
  test("should return the amount of years left on Mars", () => {
    expect(person.yearsLeftOnMars()).toEqual("You are the same age as the life expectancy on this planet.");
  });
  test("should return the amount of years left on Jupiter", () => {
    expect(person.yearsLeftOnJupiter()).toEqual("You are the same age as the life expectancy on this planet.");
  });
});