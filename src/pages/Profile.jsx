import React, {useContext, useEffect} from 'react';
import {GitHubContext} from "../context/github/GitHubContext";
import Loader from "../components/loader/loader";

const Profile = ({match}) => {

    const {getUser, getRepos, loading, user, repos} = useContext(GitHubContext)
    const name = match.params.name

    useEffect(() => {
        getUser(name)
        getRepos(name)
    }, [])

    if(loading){
        return <Loader/>
    }

    return (
        <div>
            <h1>Profile page</h1>
        </div>
    );
};

export default Profile;