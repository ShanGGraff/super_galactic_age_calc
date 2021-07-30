import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(12);
  });

  test("should create a person object with the person's age", () => {
    expect(person.age).toEqual(12);
  });
  test("should return the age of person in Mercury years,", () => {
    expect(person.ageToMercuryYears()).toEqual(2.88);
  });
  test("should return the age of person in Venus years,", () => {
    expect(person.ageToVenusYears()).toEqual(7.44);
  });
  test("should return the age of person in Mars years,", () => {
    expect(person.ageToMarsYears()).toEqual(22.56);
  });
  test("should return the age of person in Jupiter years,", () => {
    expect(person.ageToJupiterYears()).toEqual(142.32);
  });
});