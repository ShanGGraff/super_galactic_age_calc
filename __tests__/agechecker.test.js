import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(12, 72);
  });

  test("should create a person object with the person's age and life expectancy", () => {
    expect(person.age).toEqual(12);
    expect(person.lifeExpectancy).toEqual(72);
  });
  test("should return the age of person in Mercury years", () => {
    expect(person.ageToMercuryYears()).toEqual(2.88);
  });
  test("should return the age of person in Venus years", () => {
    expect(person.ageToVenusYears()).toEqual(7.44);
  });
  test("should return the age of person in Mars years", () => {
    expect(person.ageToMarsYears()).toEqual(22.56);
  });
  test("should return the age of person in Jupiter years", () => {
    expect(person.ageToJupiterYears()).toEqual(142.32);
  });
  test("should return the life expectancy on Mercury", () => {
    expect(person.lifeExpectancyOnMercury()).toEqual(14.2);
  });
});