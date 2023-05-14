//import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
//import Counter from '../components/Counter';

const initialCounterState = { counter: 0 , toggle: true };

const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers:{
        increment(state){
            state.counter++;// this seems we're mutating state but it doesn't because of internal library(imur) used by redux toolkit and it replace this with object containg store data which we're not updating and which were updating.
        },
        decrement(state){
            state.counter--;
        },
        incrementBy(state, action){
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.toggle = !state.toggle;
        },
        refreshCounter(state){
            state.counter = 0;
        }
    }
});

const initialAuthState = { isAuth: false };

const authSlice = createSlice(
    {
        name: 'authenticate',
        initialState: initialAuthState,
        reducers: {
            login(state)
            {
                state.isAuth = true;
            },
            logoff(state)
            {
                state.isAuth = false;
            }
        }
    }
);
//before using toolkit below code is used.
//const initialState = { counter: 0 , toggle: true };
// const counterReducer = (state = initialState, action) => {
//     if ( action.type === 'increment')
//     {
//         return { counter: state.counter + 1 ,toggle: state.toggle }
//     }
//     if ( action.type === 'incrementby')
//     {
//         return { counter: state.counter + action.amount , toggle: state.toggle}
//     }
//     if ( action.type === 'decrement')
//     {
//         return { counter: state.counter - 1 , toggle: state.toggle}
//     }
//     if ( action.type === 'toggle')
//     {
//         return {
//                 toggle: !state.toggle,
//                 counter: state.counter
//         }
//     }
//     return state
// }
//create store using below command
//const store = createStore(counterReducer);

//const store = createStore(counterSlice.reducer); //this works in case of single reducers


// const store = configureStore({
//     reducer : counterSlice.reducer,// here only one reducer is present(becoz one slice) otherwise we can give object of  multiple slice reducers and it will merge all reducers into one reducer bec redux store can take only one reducer for global stare.
// });

const store = configureStore({
    reducer : { counter: counterSlice.reducer, authenticate: authSlice.reducer},
});

//createSlice.actions.increment// createSlice (Redux toolkit )creates action objects automatically like {type:'increment'}

export const counterActions = counterSlice.actions;// here we export counterActions and using that we can dispatch actions
export const authActions = authSlice.actions;
export default store;