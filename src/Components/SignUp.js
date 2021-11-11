import React, {useEffect, useState} from 'react';
import "../SCSS/Login.scss"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "../Firebase/firebase"
import {useHistory} from "react-router-dom";

const SignUp = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [passErr, setPassErr] = useState(false);
    const [alredyExist, setAlredyExist] = useState(false);

    const auth = getAuth(app);
    let history = useHistory();

    const signup = (e) => {
        setPassErr(false);
        e.preventDefault();

        {password === passConf ?
        createUserWithEmailAndPassword(auth, login, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;

                signInWithEmailAndPassword(auth, login, password)
                    .then((userCredential) => {
                        history.push('/');
                    })
                    .catch((error) => {
                        console.log('Something gone wrong.')
                    });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setAlredyExist(error.code);
            }) : setPassErr(true)
        }
    }
    return <div className={"login"}>
        <form onSubmit={signup}>
            Sign up
            <input type={"email"} placeholder={"Email"} value={login} onChange={(e) => setLogin(e.target.value)}/>
            <input type={"password"} placeholder={"Password"} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <input type={"password"} placeholder={"Confirm the password"} value={passConf} onChange={e=>setPassConf(e.target.value)}/>
            {passErr && <p className={"error"}>Hasła nie są takie same</p>}
            {alredyExist === 'auth/email-already-in-use' && <p className={"error"}>An account with the given email already exists</p> }
            <button type={"submit"}>Sing up</button>
        </form>
    </div>
};

export default SignUp;