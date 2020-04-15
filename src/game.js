export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

export const changeStringState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : value
    })
  }
}

export const storeState = (initialValues) => {
  let currentState = initialValues;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

// Initial player values:
export const initialValues = { hygiene: 10, foodSupply: 5, tpSupply: 5, doctorAllowance: true };

// Assign player a name:
export const assignName = changeStringState("name");

// Functions that affect hygiene:
export const noShower = changeState("hygiene")(-1);
export const goShower = changeState("hygiene")(3);
export const groceryRun = changeState("hygiene")(-2);
export const visitDoctorAndGetBetter = changeState("hygiene")(10);

// functions that affect foodSupply:
export const buyFood = changeState("foodSupply")(4);
export const consumeFood = changeState("foodSupply")(-1);

// functions that affect doctor:
export const visitDoctorAndUseAllowance = changeStringState("doctorAllowance")(false);

// functions that affect tp supply:
export const buyTpSupply = changeState("tpSupply")(1);
export const sellTpForDoctor = changeState("tpSupply")(-5);
export const dailyUseOfTp = changeState("tpSupply")(-1);
export const tradeForBidet = changeState("tpSupply")(-15);