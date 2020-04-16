import { goShower, noShower, groceryRun, assignName, storeState, initialValues, consumeFood, buyTpSupply, dailyUseOfTp, buyBidet, buildGarden, sunRise, visitDoctor } from './../src/game.js';

describe('hygiene modifications', () => {

  test('should decrement hygiene of player by 1', () => {
    const firstPlayer = storeState(initialValues);
    const updatedPlayerObj = firstPlayer(noShower);
    expect(updatedPlayerObj.hygiene).toEqual(9);
  });

  test('should increment hygiene of player by 3', () => {
    const secondPlayer = storeState(initialValues);
    const cleanPlayerObj = secondPlayer(goShower);
    expect(cleanPlayerObj.hygiene).toEqual(13);
  });

  test('should decrement hygiene by 2', () => {
    const fourthPlayer = storeState(initialValues);
    const playerWithGroceries = fourthPlayer(groceryRun);
    expect(playerWithGroceries.hygiene).toEqual(8);
    expect(playerWithGroceries.foodSupply).toEqual(9);
  });
});

describe('assignName', () => {

  test('should set a player name when no name is assigned', () => {
    const thirdPlayer = storeState(initialValues);
    const newName = assignName("Patrick");
    const updatedPlayerObj = thirdPlayer(newName);
    expect(updatedPlayerObj.name).toEqual("Patrick");
  });
});

describe('doctor visits', () => {

  test('should change all properties related to visiting doctor', () => {
    const sickPlayer = storeState({hygiene: 1, foodSupply: 5, tpSupply: 5, doctorAllowance: true});
    const recoveredPlayer = sickPlayer(visitDoctor);
    expect(recoveredPlayer.tpSupply).toEqual(0);
    expect(recoveredPlayer.doctorAllowance).toEqual(false);
    expect(recoveredPlayer.hygiene).toEqual(11);
  });
});

describe('modifications to food supply', () => {

  test('should decrement food supply by 1', () => {
    const sixthPlayer = storeState(initialValues);
    const playerConsumedFood = sixthPlayer(consumeFood);
    expect(playerConsumedFood.foodSupply).toEqual(4);
  });
});

describe('modifications to tp supply', () => {

  test('should increment tp by 1', () => {
    const seventhPlayer = storeState(initialValues);
    const playerBoughtTp = seventhPlayer(buyTpSupply);
    expect(playerBoughtTp.tpSupply).toEqual(6);
  });

  test('should decrement tp by 1', () => {
    const ninthPlayer = storeState(initialValues);
    const playerDailyUseOfTp = ninthPlayer(dailyUseOfTp);
    expect(playerDailyUseOfTp.tpSupply).toEqual(4);
  });
});

describe('functions that update inventory', () => {

    test('should decrement tpsupply by 20 and update bidet to true', () => {
      const eleventhPlayer = storeState({tpSupply: 20, bidet: false});
      const playerBoughtBidet = eleventhPlayer(buyBidet);
      expect(playerBoughtBidet.bidet).toEqual(true);
      expect(playerBoughtBidet.tpSupply).toEqual(0);
    });
});

describe('win condition check', () => {
  test('should return win message', () => {
    const winningPlayer = storeState({tpSupply: 20, bidet: true, pet: true, garden: false});
    const winner = winningPlayer(buildGarden);
    expect(sunRise(winner)).toEqual("YOU WIN");
  });

  test('should return whether player loses game', () => {
    const losingPlayer = storeState({ doctorAllowance: false, hygiene: 2 });
    const loser = losingPlayer(noShower);
    expect(sunRise(loser)).toEqual("YOU LOSE");
  });
});