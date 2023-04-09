import classes from './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {

    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const loginDispatch = useDispatch();
    const onSubmitHandler = (event) => {

        event.preventDefault();
        loginDispatch({ type: 'authToggle' })


    }


    return (
        <>
            {!isAuthenticated && <main className={classes.auth}>
                <section>
                    <form onSubmit={onSubmitHandler}>
                        <div className={classes.control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>

                        <div className={classes.control}>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" />
                        </div>

                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                </section>
            </main>}
        </>
    )
}

export default Auth;