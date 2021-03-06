import Person from '../src/js/person.js'

describe('Person', () => {
  let person;

  beforeEach(() => {
    person = new Person(20, 76);
  });

  test("should create a person object with the person's age and life expectancy", () => {
    expect(person.age).toEqual(20);
    expect(person.lifeExpectancy).toEqual(76);
    expect(person.yearsLeft).toEqual(56);
  });
  test("should return the age of person in Mercury years", () => {
    expect(person.ageToMercuryYears()).toEqual(83.33);
  });
  test("should return the age of person in Venus years", () => {
    expect(person.ageToVenusYears()).toEqual(32.26);
  });
  test("should return the age of person in Mars years", () => {
    expect(person.ageToMarsYears()).toEqual(10.64);
  });
  test("should return the age of person in Jupiter years", () => {
    expect(person.ageToJupiterYears()).toEqual(1.69);
  });
  test("should return the amount of years left on Mercury", () => {
    expect(person.yearsLeftOnMercury()).toEqual(233.33);
  });
  test("should return the amount of years left on Venus", () => {
    expect(person.yearsLeftOnVenus()).toEqual(90.32);
  });
  test("should return the amount of years left on Mars", () => {
    expect(person.yearsLeftOnMars()).toEqual(29.79);
  });
  test("should return the amount of years left on Jupiter", () => {
    expect(person.yearsLeftOnJupiter()).toEqual(4.72);
  });
});

describe('Person', () => {
  let person2;

  beforeEach(() => {
    person2 = new Person(20, 20);
  });
  test("should create a person object with the person's age and life expectancy", () => {
    expect(person2.age).toEqual(20);
    expect(person2.lifeExpectancy).toEqual(20);
    expect(person2.yearsLeft).toEqual(0);
  });
  test("should return the amount of years left on Mercury if age and life expectancy are the same.", () => {
    expect(person2.yearsLeftOnMercury()).toEqual(0);
  });
  test("should return the amount of years left on Venus if age and life expectancy are the same.", () => {
    expect(person2.yearsLeftOnVenus()).toEqual(0);
  });
  test("should return the amount of years left on Mars if age and life expectancy are the same.", () => {
    expect(person2.yearsLeftOnMars()).toEqual(0);
  });
  test("should return the amount of years left on Jupiter if age and life expectancy are the same.", () => {
    expect(person2.yearsLeftOnJupiter()).toEqual(0);
  });
});

describe('Person', () => {
  let person3;

  beforeEach(() => {
    person3 = new Person(72, 71);
  });
  test("should create a person object with the person's age and life expectancy", () => {
    expect(person3.age).toEqual(72);
    expect(person3.lifeExpectancy).toEqual(71);
    expect(person3.yearsLeft).toEqual(-1);
  });
  test("should return the amount of years lived past life expectancy on Mercury", () => {
    expect(person3.yearsLeftOnMercury()).toEqual(-4.17);
  });
  test("should return the amount of years lived past life expectancy on Venus", () => {
    expect(person3.yearsLeftOnVenus()).toEqual(-1.61);
  });
  test("should return the amount of years lived past life expectancy on Mars", () => {
    expect(person3.yearsLeftOnMars()).toEqual(-0.53);
  });
  test("should return the amount of years lived past life expectancy on Jupiter", () => {
    expect(person3.yearsLeftOnJupiter()).toEqual(-0.08);
  });
});

