import React, { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase"

export function useAuth(){
    const[user, setUser] = React.useState();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else{
                setUser(undefined);
            }
        });
        return unsubscribe;
    }, []);
    return{
        user,
    };
};