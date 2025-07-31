import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const app = initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let navigate = useNavigate()
    let location = useLocation()
    let {from} = location.state || {from:{pathname:'/'}}
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider()

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName, email} = result.user;
                const signedInUser = {name : displayName, email}
                setLoggedInUser(signedInUser)   
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    };
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;