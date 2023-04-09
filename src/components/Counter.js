import classes from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux-index';

const Counter = () => {

    const dispatch = useDispatch();
    const showCounter = useSelector(state => state.counter.showCounter);
    const counter = useSelector(state => state.counter.counter);
    const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);

    const incrementCounterHandler = () => {
        dispatch(counterActions.increment())
    }


    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement())
    }


    const increaseCounterHandler = () => {
        dispatch(counterActions.increase(5))
    }


    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
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