import React, { useState} from 'react';
import "../SCSS/Login.scss"
import {Link, useHistory} from "react-router-dom";
import {app} from "../Firebase/firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


const LogIn = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    let history = useHistory();
    const auth = getAuth(app);

    const LogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                history.push('/#/cars');
                console.log(user);
            })
            .catch((error) => {
                setError(error)
            });
    }
    return <div className={"login"}>
        {error && <p>Wrong email or password!</p>}
        <form onSubmit={LogIn}>
            Login into account
            <input type={"email"} placeholder={"Email"} value={login} onChange={(e) => setLogin(e.target.value)}/>
            <input type={"password"} placeholder={"Password"} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <button type={"submit"}>Log In</button>
        </form>
        <Link to={"/signup"}>Alredy have an account?</Link>
    </div>
};

export default LogIn;