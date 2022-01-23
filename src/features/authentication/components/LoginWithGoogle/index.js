import React, { createContext, useContext,useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import { auth } from './../../../../Firebase/firebase';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import GoogleButton from 'react-google-button'
import accountApi from './../../../../api/accountApi';


AuthContextProvider.propTypes = {
    
};
const AuthContext = createContext({
    currentUser: null
})
function AuthContextProvider({children}) {

    // const [currentUser, setCurrentUser] = useState(null);

    // const value = {
    //     currentUser,
    // }

    // export const useAuth = () => useContext(Au)

    // return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    // return <AuthCon
    // // const [user, setUser] = useState({});

    // // onAuthStateChanged
    const [tokentId, setTokenId ] = useState('');


    const LoginWithGg = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((re) => {
            console.log(re.user.accessToken);
            setTokenId(re.user.accessToken);
            // firebaseToken = tokenId;
        })
        .catch((error) => {
            console.log(error)
        })
        // const result = apiAccountService.signIn(firebaseToken);
        // iff result != null => msg success
    }

    useEffect(() => {
        const getInfoUser = async () => {
            try {   
                    const response = await accountApi.loginByGoogle(tokentId);
                    console.log(response)
            } catch (error) {
                console.log('Failed to login by gg: ', error);
            }
        }
        getInfoUser();
    },)

    return (
        <GoogleButton style={{width: '100%',}} onClick={LoginWithGg}>
           {/* Login in with google  */}
        </GoogleButton>
    );
}

export default AuthContextProvider;