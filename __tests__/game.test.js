import { visitDoctorAndGetBetter, changeState, noShower, assignName, storeState, myPlayer, visitDoctorAndUseAllowance } from './../src/game.js';

describe('noShower', () => {

  test('should decrement hygiene of player by 1', () => {
    const updatedPlayerObj = myPlayer(noShower);
    expect(updatedPlayerObj.hygiene).toEqual(9);
  });
});

describe('assignName', () => {

  test('should set a player name when no name is assigned', () => {
    const newName = assignName("Patrick");
    const updatedPlayerObj = myPlayer(newName);
    expect(updatedPlayerObj.name).toEqual("Patrick");
  });
});

describe('allow user to go to doctor and restore hygiene', () => {

  test('should test whether player can get sick', () => {
    const sickInitialValues = {hygiene: 1, foodSupply: 5, tpSupply: 5, doctorAllowance: true};
    const sickPlayer = storeState(sickInitialValues);
    const recoveredPlayer = sickPlayer(visitDoctorAndGetBetter);
    expect(recoveredPlayer.hygiene).toEqual(11);
  });
});

describe('remove doctor availability when user goes to doctor', () => {
  
  test('should change doctor availability from true to false', () => {
    const sickValues = {hygiene: 1, foodSupply: 5, tpSupply: 5, doctorAllowance: true};
    const newSickPlayer = storeState(sickValues);
    const recoveredPlayerVisitedDoctor = newSickPlayer(visitDoctorAndUseAllowance);
    expect(recoveredPlayerVisitedDoctor.doctorAllowance).toEqual(true);
  });
});