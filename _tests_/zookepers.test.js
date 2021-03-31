const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers");
const {zookeepers} = require('../data/zookeepers');
jest.mock('fs');

test('creates an zookeeper object', () => {
   const zookeeper = createNewZookeeper(
        {name:'tom' , id:"bjgtfj"},
        zookeepers
    )
    expect(zookeeper.name).toBe('tom');
    expect(zookeeper.id).toBe('bjgtfj')
});

test('filters by query', () => {
    const startingZookeepers = [
        {
            id: "0",
            name: "Kim",
            age: 28,
            favoriteAnimal: "dolphin"
            },
            {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
            },
        ];
        const updatedZookprs = filterByQuery({favoriteAnimal:"dolphin"}, startingZookeepers);

        expect(updatedZookprs.length).toEqual(1);

});

test("finds by id", () => {
    const startingZookeepers = [

     {
            id: "0",
            name: "Kim",
            age: 28,
            favoriteAnimal: "dolphin"
            },
            {
            id: "1",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin"
            },
        ];
        const result = findById("0", startingZookeepers);
        expect(result.name).toBe('Kim');
});

test("validates Zookeeper", () => {
    const zookeeper = {
            id: "0",
            name: "Kim",
            age: 28,
            favoriteAnimal: "dolphin"
    };
    const invalidZookeeper = {
        id: "0",
        name: "Kim",
        age: "28",
        favoriteAnimal: "bear"
    };
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});
