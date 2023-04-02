const defaultState = {
    test: 0,
}

export const TestReducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'TEST_TEST':
  return {...state, test: state.test +10 }
        default :
    return state
}}


const TEST_TEST = 'TEST_TEST';
export const testCreator = () => ({type:TEST_TEST});