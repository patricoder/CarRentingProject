import React, {useState, useEffect, useContext} from 'react';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {app} from "../Firebase/firebase";
import WelcomePage from "./WelcomePage";
import {LoginContext} from "./Context/Context";
import LoggedIn from "./LoggedIn/LoggedIn";

const Home = () => {
    const [user, setUser] = useState(<WelcomePage/>);
    const {setLoggedIn} = useContext(LoginContext);
    const auth = getAuth(app);

    const signUotMain = () => {
        signOut(auth).then(() => {
            console.log("Użytkownik wylogowany")
            setLoggedIn(false)
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                //<button onClick={signUotMain}>Sign Out </button>
                const uid = user.uid;
                setLoggedIn(true)
               setUser( <LoggedIn signOut={()=>signUotMain()} user={user}/>);
            } else {
                setUser(<WelcomePage/>);
            }

        });
    },[]);


    return user;

};

export default Home;
