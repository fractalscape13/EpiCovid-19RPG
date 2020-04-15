import { visitDoctorAndGetBetter, goShower, changeState, noShower, groceryRun, assignName, storeState, myPlayer, visitDoctorAndUseAllowance, initialValues, buyFood, consumeFood, buyTpSupply, sellTpForDoctor, dailyUseOfTp, tradeForBidet} from './../src/game.js';

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

  test('should test whether player can get sick', () => {
    const sickInitialValues = {hygiene: 1, foodSupply: 5, tpSupply: 5, doctorAllowance: true};
    const sickPlayer = storeState(sickInitialValues);
    const recoveredPlayer = sickPlayer(visitDoctorAndGetBetter);
    expect(recoveredPlayer.hygiene).toEqual(11);
  });
  
  test('should change doctor availability from true to false', () => {
    const sickValues = {hygiene: 1, foodSupply: 5, tpSupply: 5, doctorAllowance: true};
    const newSickPlayer = storeState(sickValues);
    const recoveredPlayerVisitedDoctor = newSickPlayer(visitDoctorAndUseAllowance);
    expect(recoveredPlayerVisitedDoctor.doctorAllowance).toEqual(false);
  });
});

describe('modifications to food supply', () => {

  test('should increment food supply by 4', () => {
    const fifthPlayer = storeState(initialValues);
    const playerBoughtFood = fifthPlayer(buyFood);
    expect(playerBoughtFood.foodSupply).toEqual(9);
  });

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

  test('should decrement tp supply by 5', () => {
    const eighthPlayer = storeState(initialValues);
    const playerSoldTpForDocVisit = eighthPlayer(sellTpForDoctor);
    expect(playerSoldTpForDocVisit.tpSupply).toEqual(0);
  });

  test('should decrement tp by 1', () => {
    const ninthPlayer = storeState(initialValues);
    const playerDailyUseOfTp = ninthPlayer(dailyUseOfTp);
    expect(playerDailyUseOfTp.tpSupply).toEqual(4);
  });

  test('should decrement tp supply by 15', () => {
    const tenthPlayer = storeState({ hygiene: 10, foodSupply: 5, tpSupply: 15, doctorAllowance: true });
    const playerTradedTpForBidet = tenthPlayer(tradeForBidet);
    expect(playerTradedTpForBidet.tpSupply).toEqual(0);
  });
});