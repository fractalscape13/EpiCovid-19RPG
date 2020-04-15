import { storeState, noShower, assignName } from './../src/game.js';

describe('noShower', () => {

  test('should decrement hygiene of player by 1', () => {
    const initialValues = {hygiene: 10};
    const myPlayer = storeState(initialValues);
    const updatedPlayerObj = myPlayer(noShower);
    expect(updatedPlayerObj.hygiene).toEqual(9);
  });
});

describe('assignName', () => {

  test('should change name of player', () => {
    const initialValues = {name: "Randy"};
    const myPlayer = storeState(initialValues);
    const newName = assignName("Patrick");
    const updatedPlayerObj = myPlayer(newName);
    expect(updatedPlayerObj.name).toEqual("Patrick");
  });

  test('should set a player name when no name is assigned', () => {
    const myPlayer = storeState({});
    const newName = assignName("Patrick");
    const updatedPlayerObj = myPlayer(newName);
    expect(updatedPlayerObj.name).toEqual("Patrick");
  });
});
