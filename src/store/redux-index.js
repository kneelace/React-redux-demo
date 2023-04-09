import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true, isAuthenticated: false }
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
            isAuthenticated: state.isAuthenticated
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
            isAuthenticated: state.isAuthenticated
        }
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter - action.amount,
            showCounter: state.showCounter,
            isAuthenticated: state.isAuthenticated
        }
    }
    if (action.type === 'toggleCounter') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
            isAuthenticated: state.isAuthenticated
        }
    }
    if (action.type === 'authToggle') {
        return {
            counter: state.counter,
            showCounter: state.showCounter,
            isAuthenticated: !state.isAuthenticated
        }
    }


    return state;
}
const store = createStore(counterReducer);

export default store;