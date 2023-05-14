// import React  from 'react';
// import classes from './Counter.module.css';
// import { useSelector, useDispatch} from 'react-redux';

// console.log(classes);
// const Counter = () => {

//   const dispatch = useDispatch();
//   const incrementBy = () => {
//     dispatch({ type : 'increment'})
//   }
//   const increment = () => {
//     dispatch({ type : 'incrementby', amount: 100 })
//   }
//   const decrementBy = () => {
//     dispatch({ type : 'decrement'})
//   }
//   const toggleOnOffHandler = () => {
//     dispatch({ type: 'toggle'})
//   }
//   //useSelector(state => state.counter) this will automatically create subscription for Redux store
//   const counter = useSelector(state => state.counter)

//   const toggle = useSelector(state => state.toggle);
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {toggle && <div className={classes.value}>{counter}</div>}
//       <button>Toggle Counter</button>
//       <div className='btn'>
//         <button onClick={incrementBy}>+</button>
//         <button onClick={increment}>By 100</button>
//         <button onClick={decrementBy}>-</button>
//         <button onClick={toggleOnOffHandler}>Toggle</button>
//       </div>
//     </main>
//   );
// };

// export default Counter;


//Redux toolkit version starts below

import React  from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index';


//console.log(classes);
const Counter = () => {

  const dispatch = useDispatch();
  // const incrementBy = () => {
  //   dispatch({ type : 'increment'})
  // }
  // const increment = () => {
  //   dispatch({ type : 'incrementby', amount: 100 })
  // }
  // const decrementBy = () => {
  //   dispatch({ type : 'decrement'})
  // }
  // const toggleOnOffHandler = () => {
  //   dispatch({ type: 'toggle'})
  // }
  //console.log(counterActions);

  const incrementBy = () => {
    dispatch(counterActions.increment());
  };
  const increment = () => {
    dispatch(counterActions.incrementBy(100)) //it's replaced by { type: "SOME_Unique_Identifier , payload: 100 } //Redux toolkit creates this automatically
  }
  const decrementBy = () => {
    dispatch(counterActions.decrement())
  }
  const toggleOnOffHandler = () => {
    dispatch(counterActions.toggle())
  }
  const refreshCounter=() => {
    dispatch(counterActions.refreshCounter())
  }
  //useSelector(state => state.counter) this will automatically create subscription for Redux store
  const counter = useSelector(state => state.counter.counter);// useSelector take function that always recieve state as argument which is provided by React Redux
  const toggle = useSelector(state => state.counter.toggle);

  //const isAuth = useSelector(state => state.authenticate.isAuth);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      {/* <button>Toggle Counter</button> */}
      <div className='btn'>
        <button onClick={incrementBy}>+</button>
        <button onClick={increment}>By 100</button>
        <button onClick={decrementBy}>-</button>
        <button onClick={refreshCounter}>Refresh</button>
        <button onClick={toggleOnOffHandler}>{!toggle && <span>Show</span>} {toggle && <span>Hide</span>}</button>
      </div>
    </main>
  );
};

export default Counter;