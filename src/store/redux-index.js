
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialCountState = { counter: 0, showCounter: true }
const initialAuthState = { isAuthenticated: false }

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        toggleAuth(state) {
            state.isAuthenticated = !state.isAuthenticated;
        }
    }
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCountState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        authentication: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions
export default store;