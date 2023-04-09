import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const dispatch = useDispatch();
    const showCounter = useSelector(state => state.showCounter);
    const counter = useSelector(state => state.counter);
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const incrementCounterHandler = () => {
        dispatch({ type: 'increment' })
    }


    const decrementCounterHandler = () => {
        dispatch({ type: 'decrement' })
    }


    const increaseCounterHandler = () => {
        dispatch({ type: 'increase', amount: 5 })
    }


    const toggleCounterHandler = () => {
        dispatch({ type: 'toggleCounter' })
    }


    return (
        <>
            {isAuthenticated && <main className={classes.counter}>
                <h1>Redux Counter</h1>
                {showCounter && <><div className={classes.value}>{counter}</div>
                    <div>
                        <button onClick={incrementCounterHandler}>Increment</button>
                        <button onClick={decrementCounterHandler}>Decrement</button>
                        <button onClick={increaseCounterHandler}>Increase by 5</button>
                    </div></>}
                <button onClick={toggleCounterHandler}>Toggle Counter</button>
            </main>}
        </>
    )
}

export default Counter;