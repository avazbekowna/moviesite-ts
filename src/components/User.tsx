import React, {useEffect} from 'react';
import {useTypedSelector} from "../Hook/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchingUser} from "../store/ActionCreators/user";
import {useTypedDispatch} from "../Hook/useTypedDispatch";

const User = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchingUser} = useTypedDispatch()

    useEffect(() => {
        fetchingUser()
    }, [])


    if (loading){
        return <h3>loading...</h3>
    }
    if (error){
        return <p>{error}</p>
    }

    return (
        <div>
            {
                users.map(el => (
                    <h2>{el.name}</h2>
                ))
            }
        </div>
    );
};

export default User;