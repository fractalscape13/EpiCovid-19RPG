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
const initialValues = { hygiene: 10, foodSupply: 5, tpSupply: 5 };

// Assign player a name:
export const assignName = changeStringState("name");

// Functions that affect hygiene:
export const noShower = changeState("hygiene")(-1);