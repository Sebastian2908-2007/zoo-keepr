const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
} = require('../lib/animals.js');
const {animals} = require('../data/animals');
jest.mock('fs');

test('creates an animal object', () => {
    const animal = createNewAnimal(
        {name: 'darlene', id: 'jhgdja3ng2'},
        animals
    );
    expect(animal.name).toBe('darlene');
    expect(animal.id).toBe('jhgdja3ng2')
});

test('filters by query', () => {
  const startingAnimals = [
    {
        id: "2",
        name: "Erica",
        species: "gorilla",
        diet: "omnivore",
        personalityTraits: ["quirky", "rash"],
      },
      {
        id: "3",
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
      },
  ];
  const updatedAnimals = filterByQuery({species: 'gorrilla'} , startingAnimals);

  expect(updatedAnimals.length).toEqual(0);
});

test('finds by Id', () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species:"gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
           id:"4",
           name:"Noel",
           species:"bear",
           diet:"carnivore",
           personalityTraits:["impish", "sassy", "brave"],
        },
    ]
    const result = findById("3", startingAnimals);
    expect(result.name).toBe("Erica");
});

test('validates personality traits', () => {
    const animal = {
        id:"3",
        name: 'Erica',
        species: 'gorilla',
        diet: 'omnivore',
        personalityTraits: ['quirky', 'rash'],
    };
    const invalidAnimal = {
        id: '3',
        name: 'Erica',
        species: 'gorilla',
        diet: 'omnivore',
    };
    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);

    expect(result).toBe(true);
    expect(result2).toBe(false);
})