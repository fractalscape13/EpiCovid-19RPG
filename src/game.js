// export const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

export const changeState = 
  prop => 
    value => 
      state => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  
// export const changeStringState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop] : value
//     })
//   }
// }
export const changeStringState = 
  prop => 
    value => 
      state => ({
        ...state,
        [prop] : value
      });

export const changeNumericalandStringProperty = (numProp) => {
  return (numVal) => {
    return(stringProp) => {
      return(stringVal) => {
        return(state) => ({
          ...state,
          [numProp] : (state[numProp] || 0) + numVal,
          [stringProp] : stringVal
        });
      }
    }
  }
}

const changeTwoNumberProps = (numProp1) => {
  return (numVal1) => {
    return (numProp2) => {
      return (numVal2) => {
        return (state) => ({
          ...state,
          [numProp1] : (state[numProp1] || 0) + numVal1,
          [numProp2] : (state[numProp2] || 0) + numVal2
        });
      }
    }
  }
}

const changeTwoNumberAndOneStringProperties = (numProp1) => {
  return (numVal1) => {
    return (numProp2) => {
      return (numVal2) => {
        return (stringProp) => {
          return (stringVal) => {
            return (state) => ({
              ...state,
              [numProp1] : (state[numProp1] || 0) + numVal1,
              [numProp2] : (state[numProp2] || 0) + numVal2,
              [stringProp] : stringVal
            });
          }
        }
      }
    }
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
export const initialValues = { hygiene: 10, foodSupply: 5, tpSupply: 5, doctorAllowance: true, bidet: false, pet: false, garden: false, trowel: false, leash: false, dayCount: 0 };

// Assign player a name:
export const assignName = changeStringState("name");

// Functions that affect hygiene:
export const noShower = changeState("hygiene")(-1);
export const goShower = changeState("hygiene")(3);
export const groceryRun = changeTwoNumberProps("hygiene")(-2)("foodSupply")(4);

// functions that affect foodSupply:
export const consumeFood = changeState("foodSupply")(-1);

// functions that affect doctor:
export const visitDoctor = changeTwoNumberAndOneStringProperties("hygiene")(10)("tpSupply")(-5)("doctorAllowance")(false);

// functions that affect tp supply:
export const buyTpSupply = changeState("tpSupply")(1);
export const dailyUseOfTp = changeState("tpSupply")(-1);

// increment day count:
export const nextDay = changeState("dayCount")(1);

// functions that update inventory:
export const buyBidet = changeNumericalandStringProperty("tpSupply")(-20)("bidet")(true);
export const adoptPet = changeNumericalandStringProperty("tpSupply")(-5)("pet")(true);
export const buildGarden = changeNumericalandStringProperty("tpSupply")(-5)("garden")(true);
export const buyTrowel = changeNumericalandStringProperty("tpSupply")(-3)("trowel")(true);
export const buyLeash = changeNumericalandStringProperty("tpSupply")(-3)("leash")(true);

export function sunRise(updatedPlayerObj) {
  if(updatedPlayerObj.bidet === true && updatedPlayerObj.garden === true && updatedPlayerObj.pet === true){
    return "YOU WIN";
  } else if (updatedPlayerObj.hygiene <= 1 && updatedPlayerObj.doctorAllowance === false) {
    return "YOU LOSE";
  }
}