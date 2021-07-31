import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(12, 72);
  });

  test("should create a person object with the person's age and life expectancy", () => {
    expect(person.age).toEqual(12);
    expect(person.lifeExpectancy).toEqual(72);
    expect(person.yearsLeft).toEqual(60);
  });
  test("should return the age of person in Mercury years", () => {
    expect(person.ageToMercuryYears()).toEqual(50.00);
  });
  test("should return the age of person in Venus years", () => {
    expect(person.ageToVenusYears()).toEqual(19.35);
  });
  test("should return the age of person in Mars years", () => {
    expect(person.ageToMarsYears()).toEqual(6.38);
  });
  test("should return the age of person in Jupiter years", () => {
    expect(person.ageToJupiterYears()).toEqual(1.01);
  });
  test("should return the amount of years left on Mercury", () => {
    expect(person.yearsLeftOnMercury()).toEqual(250.00);
  });
  test("should return the amount of years left on Venus", () => {
    expect(person.yearsLeftOnVenus()).toEqual(96.77);
  });
  test("should return the amount of years left on Mars", () => {
    expect(person.yearsLeftOnMars()).toEqual(31.91);
  });
  test("should return the amount of years left on Jupiter", () => {
    expect(person.yearsLeftOnJupiter()).toEqual(5.05);
  });
});